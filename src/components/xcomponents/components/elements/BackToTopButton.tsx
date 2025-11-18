import { useState, useEffect, useCallback, memo } from "react";

const BackToTopButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
  }, []);

  // Optimized scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Efficient scroll listener with cleanup
  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();

    window.addEventListener("scroll", scrollHandler, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  // Only render when visible to reduce DOM clutter
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-sky-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-0 group-hover:blur-[1px] group-active:blur-0" />

        {/* Main button */}
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black border-2 border-transparent bg-clip-padding text-white cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 active:scale-105 flex items-center justify-center group-hover:w-32 group-hover:rounded-2xl"
          aria-label="Back to top"
          title="Back to top"
        >
          {/* Arrow icon */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-0 group-hover:opacity-0"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>

          {/* Text that appears on hover */}
          <span className="absolute text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
});

BackToTopButton.displayName = "BackToTopButton";

export default BackToTopButton;
