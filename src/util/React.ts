/**
 * Global Imports
*/

import { lazy as react_lazy, ComponentType, LazyExoticComponent } from 'react';

/**
 * Functions
*/

/**
 * @param {string} name
 * @param {Promise<any>} imported
 * 
 * @return {LazyExoticComponent<ComponentType<any>>}
 */
function lazy(name:string, imported:Promise<any>):LazyExoticComponent<ComponentType<any>> {
  return react_lazy(
    () => imported.then(module => ({ default: module[name] }))
  );
}

/**
 * Exports
*/

export const ReactHelpers = { lazy };
