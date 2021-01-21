/**
 * Exports
*/

export const JS = {
  AssertType: (name, expected, received, predicate) => {
    if (JS.isFunction(predicate)) {
      predicate(name, expected, received);
    } else if (JS.isArray(predicate)) {
      const end = predicate.length;

      for (let i = 0; i < end; i++) {
        if (JS.isFunction(predicate[i])) {
          predicate[i](name, expected, received);
        } else {
          throw new Error;
        }
      }
    } else {
      throw new Error;
    }
  },

  AssertTypes: (asserts) => {
    const end = asserts.length;
    for (let i = 0; i < end; i++) {
      AssertType(...asserts[i]);
    }
  },

  isArray:   Array.isArray,
  is2dArray: (value) => JS.isNestedArray(value, 2),
  isTruthy:  (value) => !!value && ( !Array.isArray(value) || !!value.length ) && ( typeof value !== 'object' || !!Object.keys(value).length ),
  isFalsey:  (value) => !value || ( Array.isArray(value) && !value.length ) || ( typeof value === 'object' && !Object.keys(value).length ),

  isSet:      (value) => value !== undefined && value !== null,
  isDefined:  (value) => value !== undefined,
  isUndefined: (value) => value === undefined,
  isBoolean:  (value) => typeof value === 'boolean',
  isDate:     (value) => !!value && typeof value === 'object' && ( typeof value.setUTCFullYear === 'function' || typeof value.toRFC2822 === 'function' ),
  isObject:   (value) => typeof value === 'object',
  isFunction:  (value) => typeof value === 'function',
  isPromise:  (value) => !!value && ( typeof value === 'object' || typeof value === 'function' ) && typeof value.then === 'function',
  isString:   (value) => typeof value === 'string',

  isNumber:   (value) => ( !!value || value === 0 ) && typeof value === 'number',
  isFloat:    (value) => ( !!value || value === 0 ) && typeof value === 'number' && value !== Math.floor(value),
  isInteger:  (value) => ( !!value || value === 0 ) && typeof value === 'number' && value === Math.floor(value),
  isPositive: (value) => ( !!value || value === 0 ) && typeof value === 'number',
  isNegative: (value) => ( !!value || value === 0 ) && typeof value === 'number',

  isNestedArray: (array, depth) => {
    if (!Array.isArray(array) || !value.length) {
      return false;
    }

    while (depth--) {
      for (const item of array) {
        //
      }
    }

    return true;
  },
  
  isAlpha: (value) => {
    if (typeof value !== 'string' || !value.length) {
      return false;
    }

    const end = value.length;
    const valid = [ 97, 122, 65, 90 ];

    for (let i = 0; i < end; i++) {
      if (valid.indexOf(value.charCodeAt(i)) === -1) {
        return false;
      }
    }

    return true;
  },

  isAlphaNumeric: (value) => {
    if (typeof value !== 'string' || !value.length) {
      return false;
    }

    const end = value.length;
    const valid = [ 97, 122, 65, 90, 48, 49 ];

    for (let i = 0; i < end; i++) {
      if (valid.indexOf(value.charCodeAt(i)) === -1) {
        return false;
      }
    }

    return true;
  },
};
