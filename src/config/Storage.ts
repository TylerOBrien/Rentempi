/**
 * Global Imports
*/

import Config from 'react-native-config';

/**
 * Local
*/

import { AppConfig } from './App';

/**
 * Exports
*/

export const StorageConfig = {
  slug: Config.STORAGE_SLUG || AppConfig.slug,

  group: {
    default: Config.STORAGE_DEFAULT_GROUP || 'storage'
  },

  name: {
    prefix: Config.STORAGE_NAME_PREFIX || '@',
    suffix: Config.STORAGE_NAME_SUFFIX || '',
    delimeter: Config.STORAGE_NAME_DELIMETER || ':'
  }
};
