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
 * @param {Array<T>} items
 * 
 * @return {Array<T>}
 */
export function truthies<T=unknown>(items:Array<T>):Array<T> {
  const result:Array<T> = [];
  const end = items.length;

  for (let i = 0; i < end; i++) {
    if (JS.isArray(items[i])) {
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
 * @param {object} source
 * @param {Array<string>} parent
 * @param {object} existing
 * 
 * @return {object}
 */
export function condense(source:object, parent?:Array<string>, existing?:object):object {
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
 * Clones the passed object and removes the specified keys.
 * 
 * @param {object} source
 * @param {Array<string>|object} except
 * 
 * @return {object}
 */
export function excepted(source:object, except:Array<string> | object):object {
  const clone = Object.assign({}, source);

  if (JS.isArray(except)) {
    let i = (<Array<string>>except).length;
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
