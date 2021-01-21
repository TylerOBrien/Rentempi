/**
 * Global Imports
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Local Imports
*/

import { getStorageName } from '~/system/Storage';

/**
 * Locals
*/

const tmp = {};

/**
 * Exports
*/

/**
 * 
 */
export function useTmp(group='db') {
  /** Helpers **/

  /**
   * 
   */
  const keys = () => {
    return new Promise(resolve => {
      resolve(Object.keys(tmp));
    });
  };

  /**
   * 
   */
  const has = (key) => {
    return new Promise(resolve => {
      resolve(Object.keys(tmp).indexOf(key) !== -1);
    });
  };

  /**
   * 
   */
  const get = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(getStorageName(group, key))
        .then(data => resolve(data ? JSON.parse(data) : undefined))
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const set = (key, value) => {
    return new Promise((resolve, reject) => {
      let payload = null;

      try {
        payload = JSON.stringify(value);
      } catch (error) {
        reject(error);
      }

      AsyncStorage.setItem(getStorageName(group, key), payload)
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * 
   */
  const merge = (key, value) => {
    return new Promise((resolve, reject) => {
      let payload = null;

      try {
        payload = JSON.stringify(value);
      } catch (error) {
        reject(error);
      }

      AsyncStorage.mergeItem(getStorageName(group, key), payload)
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