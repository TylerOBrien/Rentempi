/**
 * Global Imports
*/

import Config from 'react-native-config';

/**
 * Exports
*/

export const AppConfig = {
  name: Config.APP_NAME,
  slug: Config.APP_SLUG || Config.APP_NAME.toLowerCase().replace(/[^a-z\-]/g, ''),
  mode: Config.APP_MODE || 'debug',

  restrict: {
    countries: [
      'Canada', 'United States'
    ]
  }
};
