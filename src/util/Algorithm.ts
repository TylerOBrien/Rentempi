/**
 * Sibling Imports
*/

import { Assert } from './Assert';

/**
 * Exports
*/

/**
 * Returns a new array that is a copy of items, except the elements in items
 * that are falsey will be removed.
 * 
 * If an element in items is itself an array then it will be recursively
 * evaluated such that this function guarantees to return a 1-dimensional array
 * regardless of the depth of the array passed.
 * 
 * @param {Array<T>} items
 * 
 * @return {Array<T>}
 */
export function truthies<T=unknown>(items:Array<T>):Array<T> {
  const result:Array<T> = [];
  const end = items.length;

  for (let i = 0; i < end; i++) {
    if (Array.isArray(items[i])) {
      const children:Array<T> = truthies(items[i] as any);
      if (children.length) {
        result.push(...children);
      }
    } else if (items[i]) {
      result.push(items[i]);
    }
  }

  return result;
}

/**
 * Returns the named value from source. The given key may contain periods to
 * denote child objects/values. For example:
 * 
 * const source = {
 *     foo: 42,
 *     bar: {
 *         message: 'hello',
 *         baz: {
 *             data: 'testing 123'
 *         }
 *     }
 * };
 * 
 * within(source, 'foo'); // 42
 * within(source, 'bar.message'); // 'hello'
 * within(source, 'bar.baz.data'); // 'testing 123'
 * 
 * @param {T} source
 * @param {string} key
 * 
 * @return {unknown}
 */
export function within<T>(source:T, key:string):unknown {
  if (!key) {
    Assert.ThrowUnexpectedEmptyError('key', 'string');
  }

  const parts = key.split('.');
  const end = parts.length;
  
  let index = 0;
  let node = source;

  while (node && index < end) {
    node = node[parts[index++]];
  }

  return node;
}

/**
 * @param {object} condensed
 * 
 * @return {object}
 */
export function expand(condensed:object):object {
  const expanded = {};

  for (const key in condensed) {
    const parts = key.split('.');
    const end = parts.length;
    const value = ( typeof condensed[key] === 'object' )
      ? Object.assign({}, condensed[key])
      : condensed[key];

    if (end === 1) {
      expanded[key] = value;
    } else {
      let node = expanded;

      for (let i = 0; i < (end-1); i++) {
        if (!node[parts[i]]) {
          node[parts[i]] = {};
        }
        node = node[parts[i]];
      }

      node[parts[end-1]] = value;
    }
  }

  return expanded;
}

/**
 * @param {InTy} source
 * @param {Array<string>} parent
 * @param {OutTy} existing
 * 
 * @return {OutTy}
 */
export function condense<InTy=object, OutTy=InTy>(source:InTy, parent?:Array<string>, existing?:OutTy):OutTy {
  if (!source) {
    return null;
  }

  const tree = (parent || []) as Array<string>;
  const result = (existing || {}) as unknown as OutTy;

  for (const key in source) {
    if (typeof source[key] === 'object') {
      condense(source[key], tree.concat(key), result);
    } else {
      result[tree.join('.') + ( tree.length ? '.' : '' ) + key] = source[key];
    }
  }

  return result;
}

/**
 * Clones the passed object and removes the specified keys.
 * 
 * @param {InTy} source
 * @param {object|Array<string>} except
 * 
 * @return {OutTy}
 */
export function excepted<InTy=object, OutTy=InTy>(source:InTy, except:object | Array<string>):OutTy {
  const clone = Object.assign({}, source as unknown as OutTy);

  if (Array.isArray(except)) {
    let i = (except as Array<string>).length;
    while (i--) {
      delete clone[except[i]];
    }
  } else {
    for (const key in except) {
      if (except[key]) {
        delete clone[key];
      }
    }
  }

  return clone;
}

/**
 * Namespaced Exports
*/

export const Algorithm = { truthies, within, expand, condense, excepted };
