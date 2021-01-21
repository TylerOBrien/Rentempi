/**
 * Sibling Imports
*/

import { Assert } from './Assert';
import { JS } from './JS';

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
 * @param {array} items
 * 
 * @return {array}
 */
export function truthies(items:any[]):any[] {
  const result = [];
  const end = items.length;

  for (let i = 0; i < end; i++) {
    if (JS.isArray(items[i])) {
      const children = truthies(items[i]);
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
 * @param {object} source
 * @param {string} key
 * 
 * @return {*}
 */
export function within(source:any, key:string):any {
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
 * 
 * 
 * @param {object} condensed
 * 
 * @return {object}
 */
export function expand(condensed:any):any {
  const expanded = {};

  for (const key in condensed) {
    const parts = key.split('.');
    const end = parts.length;
    const value = JS.isObject(condensed[key]) ? Object.assign({}, condensed[key]) : condensed[key];

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
 * 
 * 
 * @param {object} source
 * @param {array|undefined} parent
 * @param {object|undefined} existing
 * 
 * @return {object}
 */
export function condense(source:any, parent?:string[], existing?:any):any {
  if (!parent) {
    parent = [];
  }

  const result = existing || {};

  for (const key in source) {
    if (!JS.isObject(source[key])) {
      result[parent.join('.') + ( parent.length ? '.' : '' ) + key] = source[key];
    } else {
      condense(source[key], parent.concat(key), result);
    }
  }

  return result;
}

/**
 * 
 * 
 * @param {object} source
 * @param {array|object} except
 * 
 * @return {object}
 */
export function excepted(source:any, except:string[] | any):any {
  const clone = Object.assign({}, source);

  if (JS.isArray(except)) {
    let i = except.length;
    while (i--) {
      delete clone[except[i]];
    }
  } else {
    for (const key in except) {
      delete clone[key];
    }
  }

  return clone;
}

/**
 * Namespaced Exports
*/

export const Algorithm = { truthies, within, expand, condense, excepted };
