/**
 * Locals
*/

/**
 * Wraps built-in JSON.parse() function with a Promise.
 * 
 * @param {string} serialized
 * 
 * @return {Promise<any>}
 */
function parse(serialized:string):Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(serialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Wraps built-in JSON.stringify() function with a Promise.
 * 
 * @param {any} unserialized
 * 
 * @return {Promise<string>}
 */
function stringify(unserialized:any):Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.stringify(unserialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Exports
*/

export const AsyncJSON = { parse, stringify };
