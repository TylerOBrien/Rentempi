/**
 * Global Imports
*/

import { Dimensions } from 'react-native';

/**
 * Types/Interfaces
*/

export interface ScreenDimensions {
  landscape: {
    width: number;
    height: number;
  },
  portrait: {
    width: number;
    height: number;
  }
}

/**
 * Functions
*/

/**
 * @return {ScreenDimensions}
 */
function dimensions():ScreenDimensions {
  const { width, height } = Dimensions.get('window');

  const min = Math.min(width, height);
  const max = Math.max(width, height);

  return {
    landscape: {
      width: max,
      height: min
    },
    portrait: {
      width: min,
      height: max
    }
  };
}

/**
 * Exports
*/

export const ScreenDriver = {
  dimensions
};
