/**
 * Component optimization utilities
 */

import { memo, ComponentType } from "react";

/**
 * Higher-order component to optimize component with React.memo
 * Use this for components that receive the same props frequently
 */
export function withMemo<P extends object>(
  Component: ComponentType<P>,
  arePropsEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) {
  const MemoizedComponent = memo(Component, arePropsEqual);
  MemoizedComponent.displayName = `Memo(${
    Component.displayName || Component.name || "Component"
  })`;
  return MemoizedComponent;
}

/**
 * Custom comparison function for props with callbacks
 * Useful when props include functions that are recreated on each render
 */
export function shallowCompareWithoutFunctions<P extends Record<string, any>>(
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
): boolean {
  const prevKeys = Object.keys(prevProps);
  const nextKeys = Object.keys(nextProps);

  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  return prevKeys.every((key) => {
    const prevValue = prevProps[key];
    const nextValue = nextProps[key];

    // Skip function comparisons
    if (typeof prevValue === "function" && typeof nextValue === "function") {
      return true;
    }

    return Object.is(prevValue, nextValue);
  });
}

/**
 * Debounce function for expensive operations
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll/resize handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Lazy load component with retry logic
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries = 3,
  interval = 1000
): React.LazyExoticComponent<T> {
  return React.lazy(async () => {
    let lastError: Error | null = null;

    for (let i = 0; i < retries; i++) {
      try {
        return await componentImport();
      } catch (error) {
        lastError = error as Error;
        console.warn(`Retry ${i + 1}/${retries} failed:`, error);

        if (i < retries - 1) {
          await new Promise((resolve) => setTimeout(resolve, interval));
        }
      }
    }

    throw lastError;
  });
}

// Re-export React for lazy import
import React from "react";
export { React };
