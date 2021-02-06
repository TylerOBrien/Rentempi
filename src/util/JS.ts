/**
 * Exports
*/

export const JS = {
  isArray:  (value:any):boolean => Array.isArray(value),
  isObject: (value:any):boolean => typeof value === 'object',
  isString: (value:any):boolean => typeof value === 'string',
  isNumber: (value:any):boolean => typeof value === 'number',
  isTruthy: (value:any):boolean => !!value && ( !Array.isArray(value) || !!value.length ),
  isFalsey: (value:any):boolean => !value || ( Array.isArray(value) && !value.length ),

  isSet:       (value:any):boolean => value !== undefined && value !== null,
  isDefined:   (value:any):boolean => value !== undefined,
  isUndefined: (value:any):boolean => value === undefined,

  isFloat:    (value:any):boolean => ( !!value || value === 0 ) && typeof value === 'number' && value !== Math.floor(value),
  isInteger:  (value:any):boolean => ( !!value || value === 0 ) && typeof value === 'number' && value === Math.floor(value),
  isPositive: (value:any):boolean => ( !!value || value === 0 ) && typeof value === 'number',
  isNegative: (value:any):boolean => ( !!value || value === 0 ) && typeof value === 'number',
  
  isAlpha: (value:any):boolean => {
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

  isAlphaNumeric: (value:any):boolean => {
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
