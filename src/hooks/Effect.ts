/**
 * Global Imports
*/

import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * Exports
*/

export function usePreMountEffect(effect:EffectCallback) {
  /** Refs **/

  const hasBeenCalledRef = useRef<boolean>();

  /** Side-Effects **/

  if (!hasBeenCalledRef.current) {
    hasBeenCalledRef.current = true;
    effect();
  }
}

export function usePostMountEffect(effect:EffectCallback, deps:DependencyList) {
  /** Refs **/

  const isMountedRef = useRef<boolean>();

  /** Side-Effects **/

  useEffect(() => {
    if (isMountedRef.current) {
      effect();
    } else {
      isMountedRef.current = true;
    }
  }, deps);
}
