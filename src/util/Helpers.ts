/**
 * Locals
*/

/**
 * Higher-order function that will wrap the passed function in a Promise.
 * 
 * @param {Function} callback
 * 
 * @return {Function}
 */
function promised<In=unknown, Out=void>(callback:(...args:Array<In>) => Out) : (...args:Array<In>) => Promise<Out> {
  return (...args:Array<In>) => new Promise((resolve, reject) => {
    try {
      resolve(callback(...args));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Assumes the passed word param is a single word and converts it to a singular
 * form if it is not already singular.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function singular(word:string):string {
  const end = ( word.length - 1 );

  if (end > 1 && word[end] === 's') {
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
function plural(word:string):string {
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
function lcfirst(word:string):string {
  return word && ( word[0].toLowerCase() + word.slice(1) );
}

/**
 * Returns the word param with the first letter in uppercase.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function ucfirst(word:string):string {
  return word && ( word[0].toUpperCase() + word.slice(1) );
}

/**
 * Namespaced Exports
*/

export const Helpers = { promised, singular, plural, lcfirst, ucfirst };
