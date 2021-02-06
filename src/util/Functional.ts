/**
 * Locals
*/

/**
 * Delays execution of callback. Primarily only useful to prevent blocking of
 * React Native's UI thread.
 * 
 * @param {Function} callback
 * 
 * @return {Function}
 */
function delayed(callback:Function, ...args:Array<unknown>):Function {
  return () => {
    requestAnimationFrame(() => callback(...args));
  };
}

/**
 * Namespaced Exports
*/

export const Functional = { delayed };
