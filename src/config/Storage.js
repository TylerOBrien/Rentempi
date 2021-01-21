/**
 * Global Imports
*/

import {
  STORAGE_SLUG,
  STORAGE_DEFAULT_GROUP,
  STORAGE_NAME_PREFIX,
  STORAGE_NAME_SUFFIX,
  STORAGE_NAME_DELIMETER
} from 'react-native-config';

/**
 * Local
*/

import { AppConfig } from './App';

/**
 * Exports
*/

export const StorageConfig = {
  slug: STORAGE_SLUG || AppConfig.slug,

  group: {
    default: STORAGE_DEFAULT_GROUP || 'storage'
  },

  name: {
    prefix: STORAGE_NAME_PREFIX || '@',
    suffix: STORAGE_NAME_SUFFIX || '',
    delimeter: STORAGE_NAME_DELIMETER || ':'
  }
};
