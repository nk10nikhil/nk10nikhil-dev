/**
 * Image Optimization Script
 * Converts images to WebP format and optimizes them
 *
 * Usage: node scripts/optimize-images.js
 */

const fs = require("fs");
const path = require("path");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"];
const PUBLIC_DIR = path.join(__dirname, "..", "public");

function findImages(dir, images = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, images);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        images.push({
          path: filePath,
          name: file,
          size: stat.size,
          ext: ext,
        });
      }
    }
  });

  return images;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function analyzeImages() {
  console.log("🔍 Scanning for images...\n");

  const images = findImages(PUBLIC_DIR);

  console.log(`Found ${images.length} images\n`);

  // Group by extension
  const byExtension = {};
  let totalSize = 0;

  images.forEach((img) => {
    if (!byExtension[img.ext]) {
      byExtension[img.ext] = { count: 0, size: 0, files: [] };
    }
    byExtension[img.ext].count++;
    byExtension[img.ext].size += img.size;
    byExtension[img.ext].files.push(img);
    totalSize += img.size;
  });

  // Print summary
  console.log("📊 Image Analysis:\n");
  console.log("Extension | Count | Total Size");
  console.log("----------|-------|------------");

  Object.keys(byExtension)
    .sort()
    .forEach((ext) => {
      const data = byExtension[ext];
      console.log(
        `${ext.padEnd(9)} | ${String(data.count).padStart(5)} | ${formatBytes(
          data.size
        )}`
      );
    });

  console.log("----------|-------|------------");
  console.log(
    `Total     | ${String(images.length).padStart(5)} | ${formatBytes(
      totalSize
    )}\n`
  );

  // Find largest images
  const largestImages = images.sort((a, b) => b.size - a.size).slice(0, 10);

  console.log("🔝 Top 10 Largest Images:\n");
  largestImages.forEach((img, idx) => {
    const relativePath = path.relative(PUBLIC_DIR, img.path);
    console.log(`${idx + 1}. ${relativePath} - ${formatBytes(img.size)}`);
  });

  console.log("\n📝 Recommendations:\n");
  console.log("1. Convert JPG/PNG images to WebP format (up to 30% smaller)");
  console.log("2. Resize large images to appropriate dimensions");
  console.log("3. Use lazy loading for below-the-fold images");
  console.log("4. Consider using blur placeholders during load\n");

  console.log("💡 To optimize images:");
  console.log("   • Install sharp: npm install --save-dev sharp");
  console.log("   • Run conversion: npm run convert-images\n");

  return {
    images,
    byExtension,
    totalSize,
    largestImages,
  };
}

// Run analysis
analyzeImages();
