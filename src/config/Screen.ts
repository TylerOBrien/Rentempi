/**
 * Global Imports
*/

import { Dimensions } from 'react-native';

/**
 * Exports
*/

export const ScreenConfig = {
  dimensions: {
    min: Math.min(Dimensions.get('window').width, Dimensions.get('window').height),
    max: Math.max(Dimensions.get('window').width, Dimensions.get('window').height)
  },
  initial: {
    Guest: 'Welcome',
    Unverified: 'Verify Email',
    Verified: 'Lobby'
  }
};
