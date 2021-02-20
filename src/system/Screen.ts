/**
 * Global Imports
*/

import { Dimensions } from 'react-native';

/**
 * Functions
*/

/**
 * @return {Array<number>}
 */
function dimensions():Array<number> {
  const window = Dimensions.get('window');
  return [ window.width, window.height ];
}

/**
 * Exports
*/

export const ScreenDriver = {
  dimensions
};
