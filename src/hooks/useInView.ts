import { useEffect, useMemo, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

type InViewCallback = (entry: IntersectionObserverEntry) => void;

type ObserverEntry = {
  observer: IntersectionObserver;
  callbacksByElement: Map<Element, Set<InViewCallback>>;
};

const observerPool = new Map<string, ObserverEntry>();
const rootIds = new WeakMap<Element | Document, string>();
let rootIdCounter = 0;

const getRootId = (root: Element | Document | null) => {
  if (!root) {
    return "viewport";
  }
  const existing = rootIds.get(root);
  if (existing) {
    return existing;
  }
  const next = `root-${++rootIdCounter}`;
  rootIds.set(root, next);
  return next;
};

const normalizeThreshold = (
  threshold: IntersectionObserverInit["threshold"],
) => {
  if (Array.isArray(threshold)) {
    return [...threshold].sort((a, b) => a - b);
  }
  return threshold ?? 0;
};

const makePoolKey = (
  root: Element | Document | null,
  rootMargin: string,
  threshold: IntersectionObserverInit["threshold"],
) => {
  const normalized = normalizeThreshold(threshold);
  const thresholdKey = Array.isArray(normalized)
    ? normalized.join(",")
    : String(normalized);
  return `${getRootId(root)}|${rootMargin}|${thresholdKey}`;
};

const getObserverEntry = (
  root: Element | Document | null,
  rootMargin: string,
  threshold: IntersectionObserverInit["threshold"],
) => {
  const key = makePoolKey(root, rootMargin, threshold);
  const pooled = observerPool.get(key);
  if (pooled) {
    return { key, entry: pooled };
  }

  const callbacksByElement = new Map<Element, Set<InViewCallback>>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const callbacks = callbacksByElement.get(entry.target);
        callbacks?.forEach((cb) => cb(entry));
      });
    },
    {
      root,
      rootMargin,
      threshold,
    },
  );

  const entry = { observer, callbacksByElement };
  observerPool.set(key, entry);
  return { key, entry };
};

export function useInView(options: UseInViewOptions = {}) {
  const {
    once = true,
    threshold = 0.1,
    root = null,
    rootMargin = "50px",
  } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const normalizedThreshold = useMemo(
    () => normalizeThreshold(threshold),
    [threshold],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const { key, entry } = getObserverEntry(
      root,
      rootMargin,
      normalizedThreshold,
    );

    const callback: InViewCallback = (observerEntry) => {
      if (observerEntry.isIntersecting) {
        setIsInView(true);
        if (once) {
          const callbacks = entry.callbacksByElement.get(node);
          callbacks?.delete(callback);
          if (callbacks && callbacks.size === 0) {
            entry.callbacksByElement.delete(node);
            entry.observer.unobserve(node);
          }
        }
        return;
      }

      if (!once) {
        setIsInView(false);
      }
    };

    const callbacks =
      entry.callbacksByElement.get(node) ?? new Set<InViewCallback>();
    callbacks.add(callback);
    entry.callbacksByElement.set(node, callbacks);
    entry.observer.observe(node);

    return () => {
      const pooled = observerPool.get(key);
      if (!pooled) {
        return;
      }

      const registered = pooled.callbacksByElement.get(node);
      registered?.delete(callback);

      if (registered && registered.size === 0) {
        pooled.callbacksByElement.delete(node);
        pooled.observer.unobserve(node);
      }

      if (pooled.callbacksByElement.size === 0) {
        pooled.observer.disconnect();
        observerPool.delete(key);
      }
    };
  }, [normalizedThreshold, once, root, rootMargin]);

  return { ref, isInView };
}
