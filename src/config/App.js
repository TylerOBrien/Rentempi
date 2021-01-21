/**
 * Global Imports
*/

import {
  APP_NAME,
  APP_SLUG,
  APP_MODE
} from 'react-native-config';

/**
 * Exports
*/

export const AppConfig = {
  name: APP_NAME,
  slug: APP_SLUG || APP_NAME.toLowerCase().replace(/[^a-z\-]/g, ''),
  mode: APP_MODE || 'debug',

  restrict: {
    countries: [
      'Canada', 'United States'
    ]
  }
};
