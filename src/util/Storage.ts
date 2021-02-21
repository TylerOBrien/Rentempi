/**
 * Local Imports
*/

import { StorageConfig } from '~/config/Storage';

/**
 * Sibling Imports
*/

import { AsyncJSON } from './JSON';

/**
 * Locals
*/

/**
 * Retrieve the fully qualified name to be used for a key in storage.
 * 
 * @param {string} group
 * @param {string} key
 * 
 * @return {Promise<string>}
 */
function name(group:string, key:string):Promise<string> {
  return new Promise(resolve => {
    resolve(
      StorageConfig.name.prefix
      + StorageConfig.slug
      + StorageConfig.name.delimeter
      + group
      + StorageConfig.name.delimeter
      + key
      + StorageConfig.name.suffix
    );
  });
}

/**
 * Retrieve a key and value pair to be saved in storage.
 * 
 * @param {string} group
 * @param {string} key
 * @param {object} unserialized
 * 
 * @return {Promise<Array<Promise<string>>>}
 */
function entry(group:string, key:string, unserialized:object):Promise<Array<Promise<string>>> {
  return new Promise((resolve, reject) => {
    const promises = [
      name(group, key),
      AsyncJSON.stringify(unserialized)
    ];

    Promise.all(promises)
      .then(() => resolve(promises))
      .catch(reject);
  });
}

/**
 * Namespaced Exports
*/

export const Storage = { name, entry };
