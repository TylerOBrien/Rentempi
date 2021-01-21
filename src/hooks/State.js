/**
 * Global Imports
*/

import { useEffect, useRef, useState } from 'react';

/**
 * Exports
*/

export function usePromisedState(initial) {
  /** Refs **/
  
  const resolveRef = useRef();
  const rejectRef = useRef();
  
  /** States **/
  
  const [ state, setState ] = useState(initial);
  
  /** Side-Effects **/
  
  useEffect(() => {
    if (resolveRef.current) {
      try {
        resolveRef.current(state);
      } catch (error) {
        rejectRef.current(error);
      }

      resolveRef.current = null;
      rejectRef.current = null;
    }
  }, [ state ]);
  
  /** Setter **/
  
  const setStatePromised = (newState) => {
    return new Promise((resolve, reject) => {
      if (typeof newState !== 'function' && state === newState) {
        resolve(state);
      } else {
        resolveRef.current = resolve;
        rejectRef.current = reject;

        setState(newState);
      }
    });
  };

  /** Output **/
  
  return [ state, setStatePromised ];
}
