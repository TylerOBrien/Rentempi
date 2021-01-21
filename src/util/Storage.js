/**
 * Local Imports
*/

import { StorageConfig } from '~/config';
import { AsyncJSON } from './JSON';

/**
 * Exports
*/

/**
 * 
 */
export function name(group, key) {
  return new Promise(resolve => {
    resolve(
      StorageConfig.name.prefix
      + StorageConfig.store
      + StorageConfig.name.delimeter
      + group
      + StorageConfig.name.delimeter
      + key
      + StorageConfig.name.suffix
    );
  });
}

/**
 * 
 */
export function entry(group, key, unserialized) {
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
