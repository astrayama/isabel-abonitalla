'use client';

import { useCallback, useSyncExternalStore } from 'react';

// Server render (and hydration) always sees `serverValue`; the real match applies right after
export function useMediaQuery(query: string, serverValue = false) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}

const noopSubscribe = () => () => {};

// True only after hydration, for UI that depends on client-only state (e.g. the theme)
export function useHasMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
