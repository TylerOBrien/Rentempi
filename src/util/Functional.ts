/**
 * Types/Interfaces
*/

export type AnyCallback<Out=void> = (...args:Array<unknown>) => Out | Promise<Out>;

/**
 * Locals
*/

/**
 * Delays execution of callback. Primarily only useful to prevent blocking of
 * React Native's UI thread.
 * 
 * @param {AnyCallback<T>} callback
 * 
 * @return {AnyCallback<void>}
 */
function delayed<T=void>(callback:AnyCallback<T>) : AnyCallback<void> {
  return (...args:Array<unknown>) : void => {
    requestAnimationFrame(() => callback(...args));
  };
}

/**
 * Namespaced Exports
*/

export const Functional = { delayed };
