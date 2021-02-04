/**
 * Global Imports
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Local Imports
*/

import { Storage } from '~/util/Storage';

/**
 * Locals
*/

/**
 * Retrieve an array of all keys in storage.
 * 
 * @return {Promise<Array<string>>}
 */
function keys():Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    AsyncStorage.getAllKeys()
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Retrieve an item from storage.
 * 
 * @param {string} group
 * @param {string} key
 * 
 * @return {Promise<string>}
 */
function get(group:string, key:string):Promise<string> {
  return new Promise((resolve, reject) => {
    Storage.name(group, key)
      .then(name => AsyncStorage.getItem(name))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Save an item to storage.
 * 
 * @param {string} group
 * @param {string} key
 * @param {any} unserialized
 * 
 * @return {Promise<any>}
 */
function set(group:string, key:string, unserialized:any):Promise<any> {
  return new Promise((resolve, reject) => {
    Storage.entry(group, key, unserialized)
      .then(entry => AsyncStorage.setItem(entry[0], entry[1]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Merge data with an existing item in storage.
 * 
 * @param {string} group
 * @param {string} key
 * @param {any} unserialized
 * 
 * @return {Promise<any>}
 */
function merge(group:string, key:string, unserialized:any):Promise<any> {
  return new Promise((resolve, reject) => {
    Storage.entry(group, key, unserialized)
      .then(entry => AsyncStorage.mergeItem(entry[0], entry[1]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Remove an item from storage.
 * 
 * @param {string} group
 * @param {string} key
 * 
 * @return {Promise<any>}
 */
function remove(group:string, key:string):Promise<any> {
  return new Promise((resolve, reject) => {
    Storage.name(group, key)
      .then(name => AsyncStorage.removeItem(name))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Namespaced Exports
*/

export const StorageDriver = { keys, get, set, merge, remove, clear: AsyncStorage.clear };
