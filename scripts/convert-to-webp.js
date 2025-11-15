/**
 * WebP Image Conversion Helper
 *
 * This script helps convert images to WebP format for better performance.
 * Requires 'sharp' package: npm install sharp
 *
 * Usage:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: node scripts/convert-to-webp.js [directory]
 *
 * Example: node scripts/convert-to-webp.js public/about
 */

const fs = require("fs");
const path = require("path");

console.log(`
╔═══════════════════════════════════════════════════╗
║  WebP Image Converter                             ║
║  Converts JPG, JPEG, PNG to WebP format           ║
╚═══════════════════════════════════════════════════╝
`);

// Check if sharp is installed
let sharp;
try {
  sharp = require("sharp");
  console.log("✅ Sharp library found\n");
} catch (error) {
  console.error(`
❌ Error: 'sharp' package not found!

To install sharp, run:
  npm install --save-dev sharp

Or install globally:
  npm install -g sharp

Then run this script again.
`);
  process.exit(1);
}

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];
const DEFAULT_QUALITY = 80; // WebP quality (0-100)

function findImages(dir, images = []) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return images;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, images);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        images.push(filePath);
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

async function convertToWebP(imagePath, quality = DEFAULT_QUALITY) {
  try {
    const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      return { skipped: true, reason: "WebP exists" };
    }

    const originalSize = fs.statSync(imagePath).size;

    await sharp(imagePath).webp({ quality }).toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(
      1
    );

    return {
      success: true,
      originalSize,
      newSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
}

async function convertImages(directory) {
  console.log(`🔍 Scanning directory: ${directory}\n`);

  const images = findImages(directory);

  if (images.length === 0) {
    console.log("❌ No images found to convert.\n");
    return;
  }

  console.log(`Found ${images.length} image(s) to process\n`);
  console.log("Converting...\n");

  let converted = 0;
  let skipped = 0;
  let errors = 0;
  let totalOriginal = 0;
  let totalNew = 0;

  for (const imagePath of images) {
    const fileName = path.basename(imagePath);
    process.stdout.write(`Converting: ${fileName}...`);

    const result = await convertToWebP(imagePath);

    if (result.success) {
      converted++;
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      console.log(` ✅ ${result.savings}% smaller`);
    } else if (result.skipped) {
      skipped++;
      console.log(` ⏭️  Skipped (${result.reason})`);
    } else if (result.error) {
      errors++;
      console.log(` ❌ Error: ${result.message}`);
    }
  }

  console.log(`
╔═══════════════════════════════════════════════════╗
║  Conversion Complete!                             ║
╚═══════════════════════════════════════════════════╝

📊 Summary:
  • Converted: ${converted} images
  • Skipped:   ${skipped} images (already exist)
  • Errors:    ${errors} images
  
💾 Size Reduction:
  • Original:  ${formatBytes(totalOriginal)}
  • New:       ${formatBytes(totalNew)}
  • Savings:   ${formatBytes(totalOriginal - totalNew)} (${(
    ((totalOriginal - totalNew) / totalOriginal) *
    100
  ).toFixed(1)}%)

✨ Next Steps:
  1. Test WebP images in your app
  2. Update image references if needed
  3. Keep originals as fallback (OptimizedImage handles this)
  4. Commit changes to version control
`);
}

// Main execution
const targetDir = process.argv[2] || path.join(__dirname, "..", "public");

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Directory does not exist: ${targetDir}\n`);
  process.exit(1);
}

console.log(`Target directory: ${targetDir}\n`);

convertImages(targetDir)
  .then(() => {
    console.log("\n✅ All done!\n");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Fatal error:", error);
    process.exit(1);
  });
