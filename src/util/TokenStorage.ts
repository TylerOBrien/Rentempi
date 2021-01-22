/**
 * Local Imports
*/

import { StorageConfig } from '~/config';
import { StorageDriver } from '~/system/Storage';

/**
 * Sibling Imports
*/

import { Authorization } from './Api';
import { AsyncJSON } from './JSON';

/**
 * Locals
*/

/**
 * 
 */
function get():Promise<Authorization> {
  return new Promise((resolve, reject) => {
    StorageDriver.get(StorageConfig.group.default, StorageConfig.key.token)
      .then(AsyncJSON.parse)
      .then(resolve)
      .catch(reject);
  });
};

/**
 * 
 */
function set(token:Authorization):Promise<void> {
  return StorageDriver.set(StorageConfig.group.default, StorageConfig.key.token, token);
};

/**
 * 
 */
function clear():Promise<void> {
  return StorageDriver.remove(StorageConfig.group.default, StorageConfig.key.token);
};

/**
 * Namespaced Exports
*/

export const TokenStorage = { get, set, clear };
