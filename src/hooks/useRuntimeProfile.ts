import {
  createElement,
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type RuntimeProfile = {
  isMobile: boolean;
  reducedMotion: boolean;
  lowPower: boolean;
  preferredFps: number;
};

function detectRuntimeProfile(): RuntimeProfile {
  const connection = (
    navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    }
  ).connection;

  const saveData = connection?.saveData === true;
  const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
  const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemoryDevice =
    ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <=
    4;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isMobile = window.innerWidth < 768;
  const lowPower =
    saveData || slowNetwork || lowCoreDevice || lowMemoryDevice || isMobile;

  return {
    isMobile,
    reducedMotion,
    lowPower,
    preferredFps: reducedMotion ? 12 : lowPower ? 20 : 30,
  };
}

const FALLBACK_PROFILE: RuntimeProfile = {
  isMobile: false,
  reducedMotion: false,
  lowPower: false,
  preferredFps: 30,
};

let currentProfile: RuntimeProfile = FALLBACK_PROFILE;
let started = false;
const listeners = new Set<() => void>();

const emit = () => {
  listeners.forEach((listener) => listener());
};

const updateProfile = () => {
  currentProfile = detectRuntimeProfile();
  emit();
};

const startRuntimeProfileStore = () => {
  if (started || typeof window === "undefined") {
    return;
  }
  started = true;
  updateProfile();

  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  window.addEventListener("resize", updateProfile, { passive: true });
  media.addEventListener("change", updateProfile);
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  startRuntimeProfileStore();

  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => currentProfile;

const RuntimeProfileContext = createContext<RuntimeProfile | null>(null);

export function RuntimeProfileProvider({ children }: { children: ReactNode }) {
  const profile = useSyncExternalStore(subscribe, getSnapshot, () =>
    typeof window === "undefined" ? FALLBACK_PROFILE : detectRuntimeProfile(),
  );

  const value = useMemo(() => profile, [profile]);
  return createElement(RuntimeProfileContext.Provider, { value }, children);
}

export function useRuntimeProfile() {
  const contextProfile = useContext(RuntimeProfileContext);
  const storeProfile = useSyncExternalStore(subscribe, getSnapshot, () =>
    typeof window === "undefined" ? FALLBACK_PROFILE : detectRuntimeProfile(),
  );

  return contextProfile ?? storeProfile;
}
