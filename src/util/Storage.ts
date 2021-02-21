/**
 * Local Imports
*/

import { StorageConfig } from '~/config/Storage';

/**
 * Sibling Imports
*/

import { AsyncJSON } from './JSON';

/**
 * Types/Interfaces
*/

export type StorageEntry = Array<Promise<string>>;
export type PromisedStorageEntry = Promise<StorageEntry>;

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
 * Retrieve a key and value pair to be saved in storage. The returned array will
 * contain two Promise<string> elements. The first promise resolves to the name
 * of the entry. The second resolves to the stringified JSON to be written.
 * 
 * @param {string} group
 * @param {string} key
 * @param {object} unserialized
 * 
 * @return {PromisedStorageEntry}
 */
function entry(group:string, key:string, unserialized:object):PromisedStorageEntry {
  return new Promise((resolve, reject) => {
    const promises:StorageEntry = [
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
