/**
 * Global Imports
*/

import React, {
  FunctionComponent,
  FunctionComponentElement,
  LazyExoticComponent,
  Suspense,
  SuspenseProps } from 'react';

/**
 * Types/Interfaces
*/

export type FunctionComponentLazy = LazyExoticComponent<FunctionComponent<any>>;

/**
 * Functions
*/

/**
 * @param {string} name
 * @param {Promise<any>} imported
 * 
 * @return {FunctionComponentLazy}
 */
function lazy(name:string, imported:Promise<any>) : FunctionComponentLazy {
  return React.lazy( () => imported.then(module => ({ default: module[name] })) );
}

/**
 * @param {string} name
 * @param {Promise<any>} imported
 * @param {FunctionComponent} fallback
 * 
 * @return {() => FunctionComponentElement<SuspenseProps>}
 */
function suspended(name:string, imported:Promise<any>, fallback:FunctionComponent) : () => FunctionComponentElement<SuspenseProps> {
  return () => React.createElement(
    Suspense, { fallback }, React.createElement( lazy(name, imported) )
  );
}

/**
 * Exports
*/

export const ReactHelpers = { lazy, suspended };
