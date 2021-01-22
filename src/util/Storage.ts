/**
 * Local Imports
*/

import { StorageConfig } from '~/config';

/**
 * Sibling Imports
*/

import { AsyncJSON } from './JSON';

/**
 * Locals
*/

/**
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
 * @return {Promise<any>}
 */
function entry(group:string, key:string, unserialized:any):Promise<any> {
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
