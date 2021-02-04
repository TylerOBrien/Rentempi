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
 * Retrieve the token data from storage.
 * 
 * @return {Promise<Authorization>}
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
 * Save the token data in storage.
 * 
 * @param {Authorization} token
 * 
 * @return {Promise<void>}
 */
function set(token:Authorization):Promise<void> {
  return StorageDriver.set(StorageConfig.group.default, StorageConfig.key.token, token);
};

/**
 * Remove all token data from storage.
 * 
 * @return {Promise<void>}
 */
function clear():Promise<void> {
  return StorageDriver.remove(StorageConfig.group.default, StorageConfig.key.token);
};

/**
 * Namespaced Exports
*/

export const TokenStorage = { get, set, clear };
