/**
 * Sibling Imports
*/

import { ThrowUnexpectedEmpty, ThrowUnexpectedTypeError } from './Error'
import { JS } from './JS';

/**
 * Exports
*/

/**
 * Creates a new Promise that will resolve to the passed function.
 * 
 * @param {function} callback
 * 
 * @return {Promise}
 */
export function promised(callback) {
  JS.AssertType('callback', 'function', typeof callback, JS.isFunction);

  return (...args) => new Promise((resolve, reject) => {
    try {
      resolve(callback(...args));
    } catch (error) {
      reject(error);
    }
  });
}

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
export function truthies(items) {
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
 * Assumes the passed word param is a single word and converts it to a singular
 * form if it is not already singular.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
export function singular(word) {
  JS.AssertType('word', 'string', typeof word, JS.isString);

  const end = ( word.length - 1 );

  if (end > 1 && str[end] === 's') {
    if (end > 2 && word.slice(-3) === 'ies') {
      word = word.slice(0, end-2) + 'y';
    } else {
      word = word.slice(0, end);
    }
  }

  return word;
}

/**
 * Assumes the passed word param is a single word and converts it to a plural
 * form if it is not already plural.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
export function plural(word) {
  JS.AssertType('word', 'string', typeof word, JS.isString);

  const end = ( word.length - 1 );

  if (end > 0 && word[end] !== 's') {
    if (word[end] === 'y') {
      word = ( word.slice(0, end) + 'ies' );
    } else {
      word = ( word + 's' );
    }
  }

  return word;
}

/**
 * Returns the word param with the first letter in lowercase.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
export function lcfirst(word) {
  JS.AssertType('word', 'string', typeof word, JS.isString);

  return word && ( word[0].toLowerCase() + word.slice(1) );
}

/**
 * Returns the word param with the first letter in uppercase.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
export function ucfirst(word) {
  JS.AssertType('word', 'string', typeof word, JS.isString);

  return word && ( word[0].toUpperCase() + word.slice(1) );
}
