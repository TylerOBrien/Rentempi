/**
 * Global Imports
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Local Imports
*/

import { getPayload, getStorageName } from '~/system/Storage';

/**
 * Exports
*/

/**
 * 
 */
export function useStorage(group='db') {
  /** Helpers **/

  /**
   * 
   */
  const keys = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage('getAllKeys')
        .then(resolve)
        .catch(reject);
    });
  };

  /**
   * 
   */
  const has = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage('getAllKeys')
        .then(result => resolve(result.indexOf(getStorageName(group, key)) !== -1))
        .catch(reject);
    });
  };

  /**
   * 
   */
  const get = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage('getItem', getStorageName(group, key))
        .then(data => resolve(data ? JSON.parse(data) : undefined))
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const set = (key, value) => {
    return new Promise((resolve, reject) => {
      getPayload(value)
        .then(payload => AsyncStorage.setItem(getStorageName(group, key), payload))
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const merge = (key, value) => {
    return new Promise((resolve, reject) => {
      getPayload(value)
        .then(payload => call(getStorageName(group, key), payload, 'mergeItem'))
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const remove = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(getStorageName(group, key))
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const clear = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear()
        .then(resolve)
        .catch(reject);
    });
  };
  
  /** Output **/
  
  return {
    keys, has, get, set, merge, remove, clear
  };
}