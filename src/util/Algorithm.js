/**
 * Sibling Imports
*/

import { JS } from './JS';

/**
 * Exports
*/

/**
 * 
 * 
 * @param {array} items
 * @param {*} needle
 * @param {string} operator
 * 
 * @return {array}
 */
export function search(items, needle, operator) {
  JS.AssertType('items', 'array', typeof items, JS.isArray);

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
 * 
 * 
 * @param {object} source
 * @param {string} key
 * 
 * @return {*}
 */
export function within(source, key) {
  JS.AssertTypes([
    [ 'source', 'object', typeof source,  JS.isObject ],
    [ 'key',    'string', typeof key,     JS.isString ]
  ]);
  
  if (!key) {
    ThrowUnexpectedEmpty('key', 'string');
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
export function expand(condensed) {
  if (!JS.isObject(condensed)) {
    ThrowUnexpectedTypeError('condensed', 'object', typeof condensed);
  }

  const expanded = {};

  for (const key in condensed) {
    const parts = key.split('.');
    const end = parts.length;
    const value = JS.isObject(condensed[key]) ? Object.assign(condensed[key]) : condensed[key];

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
export function condense(source, parent, existing) {
  JS.AssertTypes([
    [ 'source',   'object',           typeof source,    JS.isObject ],
    [ 'parent',   'array|undefined',  typeof parent,    JS.isUndefined, JS.isString ],
    [ 'existing', 'object|undefined', typeof existing,  JS.isUndefined, JS.isObject ]
  ]);
  
  if (!parent) {
    parent = [];
  }

  const result = existing || {};

  for (const key in source) {
    if (JS.isObject(source[key])) {
      result[parent.join('.') + ( parent.length ? '.' : '' ) + key] = source[key];
    } else {
      condense(source[key], [ ...parent, key ], result);
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
export function excepted(source, except) {
  if (!JS.isObject(source)) {
    ThrowUnexpectedTypeError('source', 'object', typeof source);
  }

  if (!JS.isObject(except) && !JS.isArray(except)) {
    ThrowUnexpectedTypeError('except', 'array|object', typeof except);
  }

  const clone = Object.assign(source);

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

export const Algorithm = { search, within, expand, condense, excepted };
