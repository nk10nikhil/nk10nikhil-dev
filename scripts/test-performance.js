/**
 * Performance Testing Script
 *
 * Runs automated performance checks and displays results
 *
 * Usage: node scripts/test-performance.js
 */

const fs = require("fs");
const path = require("path");

console.log(`
╔═══════════════════════════════════════════════════╗
║  Portfolio Performance Test                       ║
║  Automated performance analysis                   ║
╚═══════════════════════════════════════════════════╝
`);

// Check if dist folder exists
const distPath = path.join(__dirname, "..", "dist");

if (!fs.existsSync(distPath)) {
  console.error(`
❌ Error: Build folder not found!

Please run the build first:
  npm run build

Then run this script again.
`);
  process.exit(1);
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function analyzeDirectory(dir, extensions = []) {
  let files = [];

  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);

    items.forEach((item) => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (extensions.length === 0 || extensions.includes(ext)) {
          files.push({
            path: fullPath,
            name: item,
            size: stat.size,
            ext: ext,
          });
        }
      }
    });
  }

  scan(dir);
  return files;
}

function checkCompressionRatio(file) {
  const gzipPath = file.path + ".gz";
  const brotliPath = file.path + ".br";

  const result = {
    original: file.size,
    originalFormatted: formatBytes(file.size),
    gzip: null,
    gzipFormatted: null,
    gzipRatio: null,
    brotli: null,
    brotliFormatted: null,
    brotliRatio: null,
  };

  if (fs.existsSync(gzipPath)) {
    const gzipSize = fs.statSync(gzipPath).size;
    result.gzip = gzipSize;
    result.gzipFormatted = formatBytes(gzipSize);
    result.gzipRatio = ((1 - gzipSize / file.size) * 100).toFixed(1);
  }

  if (fs.existsSync(brotliPath)) {
    const brotliSize = fs.statSync(brotliPath).size;
    result.brotli = brotliSize;
    result.brotliFormatted = formatBytes(brotliSize);
    result.brotliRatio = ((1 - brotliSize / file.size) * 100).toFixed(1);
  }

  return result;
}

function runPerformanceTests() {
  console.log("🔍 Analyzing build output...\n");

  // Analyze JS bundles
  const jsFiles = analyzeDirectory(path.join(distPath, "assets", "js"), [
    ".js",
  ]).filter((f) => !f.name.endsWith(".gz") && !f.name.endsWith(".br"));

  // Analyze CSS files
  const cssFiles = analyzeDirectory(path.join(distPath, "assets", "css"), [
    ".css",
  ]).filter((f) => !f.name.endsWith(".gz") && !f.name.endsWith(".br"));

  // Calculate totals
  const totalJS = jsFiles.reduce((sum, f) => sum + f.size, 0);
  const totalCSS = cssFiles.reduce((sum, f) => sum + f.size, 0);

  console.log("📦 Bundle Analysis:\n");
  console.log(
    `JavaScript Bundles: ${jsFiles.length} files (${formatBytes(totalJS)})`
  );
  console.log(`CSS Files: ${cssFiles.length} files (${formatBytes(totalCSS)})`);
  console.log(`Total Assets: ${formatBytes(totalJS + totalCSS)}\n`);

  // Show largest bundles
  console.log("📊 Largest JavaScript Bundles:\n");
  const largestJS = jsFiles.sort((a, b) => b.size - a.size).slice(0, 5);

  largestJS.forEach((file, idx) => {
    const compression = checkCompressionRatio(file);
    console.log(`${idx + 1}. ${file.name}`);
    console.log(`   Size: ${compression.originalFormatted}`);
    if (compression.gzip) {
      console.log(
        `   Gzipped: ${compression.gzipFormatted} (${compression.gzipRatio}% reduction)`
      );
    }
    if (compression.brotli) {
      console.log(
        `   Brotli: ${compression.brotliFormatted} (${compression.brotliRatio}% reduction)`
      );
    }
    console.log("");
  });

  // Calculate performance score
  console.log("⚡ Performance Score:\n");

  const mainBundle = jsFiles.find((f) => f.name.includes("main"));
  const vendorBundle = jsFiles.find((f) => f.name.includes("vendor"));

  let score = 100;
  let warnings = [];
  let tips = [];

  // Check main bundle size
  if (mainBundle) {
    const mainSizeKB = mainBundle.size / 1024;
    if (mainSizeKB > 100) {
      score -= 10;
      warnings.push(
        `Main bundle is ${Math.round(mainSizeKB)}KB (target: <100KB)`
      );
    } else {
      tips.push(`✅ Main bundle size is optimal (${Math.round(mainSizeKB)}KB)`);
    }
  }

  // Check vendor bundle size
  if (vendorBundle) {
    const vendorSizeKB = vendorBundle.size / 1024;
    if (vendorSizeKB > 300) {
      score -= 5;
      warnings.push(
        `Vendor bundle is ${Math.round(vendorSizeKB)}KB (target: <300KB)`
      );
    } else {
      tips.push(
        `✅ Vendor bundle size is acceptable (${Math.round(vendorSizeKB)}KB)`
      );
    }
  }

  // Check total bundle size
  const totalKB = totalJS / 1024;
  if (totalKB > 1000) {
    score -= 10;
    warnings.push(
      `Total JS size is ${Math.round(totalKB)}KB (target: <1000KB)`
    );
  } else {
    tips.push(`✅ Total bundle size is good (${Math.round(totalKB)}KB)`);
  }

  // Check compression
  const hasGzip = jsFiles.some((f) => fs.existsSync(f.path + ".gz"));
  const hasBrotli = jsFiles.some((f) => fs.existsSync(f.path + ".br"));

  if (!hasGzip && !hasBrotli) {
    score -= 15;
    warnings.push("No compression detected (enable Gzip/Brotli)");
  } else {
    if (hasGzip) tips.push("✅ Gzip compression enabled");
    if (hasBrotli) tips.push("✅ Brotli compression enabled");
  }

  // Display score
  console.log(`Performance Score: ${score}/100\n`);

  if (score >= 90) {
    console.log("🌟 Excellent! Your build is well optimized.\n");
  } else if (score >= 70) {
    console.log("✅ Good! A few improvements could be made.\n");
  } else {
    console.log("⚠️  Needs improvement. Review warnings below.\n");
  }

  // Show tips
  if (tips.length > 0) {
    console.log("💡 What's Working Well:\n");
    tips.forEach((tip) => console.log(`   ${tip}`));
    console.log("");
  }

  // Show warnings
  if (warnings.length > 0) {
    console.log("⚠️  Warnings:\n");
    warnings.forEach((warning) => console.log(`   ❗ ${warning}`));
    console.log("");
  }

  // Recommendations
  console.log("📝 Recommendations:\n");
  console.log("   1. Run Lighthouse audit for detailed metrics");
  console.log("   2. Test on slow 3G network");
  console.log("   3. Check Core Web Vitals in production");
  console.log("   4. Monitor bundle size with each build");
  console.log("   5. Review dist/stats.html for bundle analysis\n");

  // Next steps
  console.log("🚀 Next Steps:\n");
  console.log("   • Test locally: npm run preview");
  console.log("   • Run Lighthouse: Chrome DevTools > Lighthouse");
  console.log("   • Deploy to production");
  console.log("   • Monitor real-world performance\n");

  console.log("✅ Performance test complete!\n");
}

// Run tests
try {
  runPerformanceTests();
} catch (error) {
  console.error("❌ Error running performance tests:", error.message);
  process.exit(1);
}
