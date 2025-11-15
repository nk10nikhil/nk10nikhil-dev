import React, { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  lazy?: boolean;
  blur?: boolean;
  priority?: boolean;
}

/**
 * OptimizedImage component with lazy loading, blur placeholder, and WebP support
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  lazy = true,
  blur = true,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);

  // Use intersection observer for lazy loading
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Determine if image should load
  const shouldLoad = priority || !lazy || inView;

  useEffect(() => {
    if (shouldLoad && src) {
      // Try to load WebP version first, fallback to original
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

      const img = new Image();

      // Try WebP first
      img.src = webpSrc;

      img.onload = () => {
        setImageSrc(webpSrc);
        setIsLoaded(true);
      };

      img.onerror = () => {
        // Fallback to original format
        const fallbackImg = new Image();
        fallbackImg.src = src;

        fallbackImg.onload = () => {
          setImageSrc(src);
          setIsLoaded(true);
        };

        fallbackImg.onerror = () => {
          // Ultimate fallback - show original src anyway
          setImageSrc(src);
          setIsLoaded(true);
        };
      };
    }
  }, [shouldLoad, src]);

  const containerClasses = `relative overflow-hidden ${className}`;
  const containerStyle =
    width || height
      ? {
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        }
      : undefined;

  return (
    <div
      ref={ref}
      className={containerClasses}
      {...(containerStyle && { style: containerStyle })}
    >
      {/* Blur placeholder */}
      {blur && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse blur-[10px] scale-110" />
      )}

      {/* Actual image */}
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...props}
        />
      )}

      {/* Loading spinner */}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
