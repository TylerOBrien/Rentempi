/**
 * Global Imports
*/

import { useEffect, useRef } from 'react';

/**
 * Exports
*/

export function usePreMountEffect(effect) {
  /** Refs **/

  const hasBeenCalledRef = useRef();

  /** Side-Effects **/

  if (!hasBeenCalledRef.current) {
    hasBeenCalledRef.current = true;
    effect();
  }
}

export function usePostMountEffect(effect, deps) {
  /** Refs **/

  const isMountedRef = useRef();

  /** Side-Effects **/

  useEffect(() => {
    if (isMountedRef.current) {
      effect();
    } else {
      isMountedRef.current = true;
    }
  }, deps);
}
