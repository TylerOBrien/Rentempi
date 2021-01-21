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
 * 
 */
function get(group, key) {
  return new Promise((resolve, reject) => {
    Storage.name(group, key)
      .then(name => AsyncStorage.getItem(name))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * 
 */
function set(group, key, unserialized) {
  return new Promise((resolve, reject) => {
    Storage.entry(group, key, unserialized)
      .then(entry => AsyncStorage.setItem(entry[0], entry[1]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * 
 */
function merge(group, key, unserialized) {
  return new Promise((resolve, reject) => {
    Storage.entry(group, key, unserialized)
      .then(entry => AsyncStorage.mergeItem(entry[0], entry[1]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * 
 */
function remove(group, key) {
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

export const StorageDriver = { get, set, merge, remove };
