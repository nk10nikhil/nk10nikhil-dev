/**
 * Utility functions for image optimization
 */

/**
 * Generate srcset for responsive images
 */
export const generateSrcSet = (
  src: string,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1920]
): string => {
  const extension = src.split(".").pop()?.toLowerCase();
  const basePath = src.substring(0, src.lastIndexOf("."));

  return sizes
    .map((size) => `${basePath}-${size}w.${extension} ${size}w`)
    .join(", ");
};

/**
 * Get WebP version of image path
 */
export const getWebPPath = (src: string): string => {
  return src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
};

/**
 * Check if browser supports WebP
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src =
      "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
  });
};

/**
 * Preload critical images
 */
export const preloadImages = (images: string[]): Promise<void[]> => {
  return Promise.all(
    images.map(
      (src) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = reject;
          img.src = src;
        })
    )
  );
};

/**
 * Get optimized image dimensions
 */
export const getOptimizedDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number = 1920,
  maxHeight: number = 1080
): { width: number; height: number } => {
  let width = originalWidth;
  let height = originalHeight;

  if (width > maxWidth) {
    const ratio = maxWidth / width;
    width = maxWidth;
    height = height * ratio;
  }

  if (height > maxHeight) {
    const ratio = maxHeight / height;
    height = maxHeight;
    width = width * ratio;
  }

  return { width: Math.round(width), height: Math.round(height) };
};

/**
 * Create blur data URL for placeholder
 */
export const createBlurDataURL = (
  width: number = 10,
  height: number = 10
): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#1a1a1a");
    gradient.addColorStop(1, "#2d2d2d");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL("image/jpeg", 0.1);
};

/**
 * Lazy load image with callback
 */
export const lazyLoadImage = (
  src: string,
  onLoad?: () => void,
  onError?: () => void
): HTMLImageElement => {
  const img = new Image();

  if (onLoad) img.onload = onLoad;
  if (onError) img.onerror = onError;

  img.src = src;

  return img;
};

/**
 * Get image file size estimate (for monitoring)
 */
export const estimateImageSize = (
  width: number,
  height: number,
  quality: number = 0.8
): number => {
  // Rough estimate: width * height * bytesPerPixel * quality
  return Math.round((width * height * 3 * quality) / 1024); // Returns KB
};
