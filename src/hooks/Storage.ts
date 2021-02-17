/**
 * Local Imports
*/

import { StorageDriver } from '~/system/Storage';
import { Storage } from '~/util';

/**
 * Types/Interfaces
*/

export interface StorageHook {
  keys: () => Promise<Array<string>>;
  has: (key:string) => Promise<boolean>;
  get: (key:string) => Promise<any>;
  set: (key:string, value:any) => Promise<void>;
  merge: (key:string, value:any) => Promise<void>;
  remove: (key:string) => Promise<void>;
  clear: () => Promise<void>;
}

/**
 * Exports
*/

export function useStorage(group:string='db'):StorageHook {
  /** Helpers **/

  /**
   * @return {Promise<boolean>}
   */
  const has = (key:string):Promise<boolean> => {
    return new Promise((resolve, reject) => {
      StorageDriver.keys()
        .then(async keys => resolve(keys.indexOf(await Storage.name(group, key)) !== -1))
        .catch(reject);
    });
  };

  /**
   * @return {Promise<T>}
   */
  const get = <T=unknown>(key:string):Promise<T> => {
    return new Promise((resolve, reject) => {
      StorageDriver.get(group, key)
        .then(data => resolve(data ? JSON.parse(data) : undefined))
        .catch(reject);
    });
  };
  
  /**
   * @return {Promise<void>}
   */
  const set = (key:string, value:any):Promise<void> => {
    return new Promise((resolve, reject) => {
      StorageDriver.set(group, key, value)
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * @return {Promise<void>}
   */
  const merge = (key:string, value:any):Promise<void> => {
    return new Promise((resolve, reject) => {
      StorageDriver.merge(group, key, value)
        .then(resolve)
        .catch(reject);
    });
  };
  
  /**
   * @return {Promise<void>}
   */
  const remove = (key:string):Promise<void> => {
    return new Promise((resolve, reject) => {
      StorageDriver.remove(group, key)
        .then(resolve)
        .catch(reject);
    });
  };
  
  /** Output **/
  
  return {
    has,
    get,
    set,
    merge,
    remove,
    keys: StorageDriver.keys,
    clear: StorageDriver.clear
  };
}
