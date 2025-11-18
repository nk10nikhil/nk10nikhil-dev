import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  forcedTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  forcedTheme,
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize theme from localStorage or default, only on client side
  const [theme, setThemeState] = useState<Theme>(() => {
    // Safe access to localStorage for SSR compatibility
    if (typeof window !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  // Memoized theme setter with localStorage persistence
  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
    },
    [storageKey]
  );

  // Calculate resolved theme (dark/light)
  const resolvedTheme = useMemo((): "dark" | "light" => {
    if (forcedTheme && (forcedTheme === "dark" || forcedTheme === "light")) {
      return forcedTheme;
    }

    if (theme === "system") {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return "dark"; // Fallback for SSR
    }

    return theme as "dark" | "light";
  }, [theme, forcedTheme]);

  // Apply theme to document root with debouncing
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove("light", "dark");

    // Add current theme class
    root.classList.add(resolvedTheme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        resolvedTheme === "dark" ? "#000000" : "#ffffff"
      );
    }
  }, [resolvedTheme]);

  // Listen for system theme changes when using system theme
  useEffect(() => {
    if (theme !== "system" || forcedTheme) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // This will trigger the resolvedTheme recalculation
      setThemeState((current) => current); // Force re-render
    };

    // Modern event listener with options
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme, forcedTheme]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
    }),
    [theme, setTheme, resolvedTheme]
  );

  return (
    <ThemeProviderContext.Provider {...props} value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Optimized hook with error boundary
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Additional utility hook for theme-dependent styles
export const useThemeClass = (lightClass: string, darkClass: string) => {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === "dark" ? darkClass : lightClass;
};

// Hook to get current theme status
export const useThemeStatus = () => {
  const { theme, resolvedTheme } = useTheme();

  return useMemo(
    () => ({
      currentTheme: theme,
      resolvedTheme,
      isDark: resolvedTheme === "dark",
      isLight: resolvedTheme === "light",
      isSystem: theme === "system",
    }),
    [theme, resolvedTheme]
  );
};
