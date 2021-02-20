/**
 * Local Imports
*/

import { ScreenDriver } from '~/system';

/**
 * Exports
*/

export const ScreenConfig = {
  dimensions: {
    min: Math.min(...ScreenDriver.dimensions()),
    max: Math.max(...ScreenDriver.dimensions())
  },
  initial: {
    Guest: 'Welcome',
    Undentified: 'Identify',
    Identified: 'Lobby'
  }
};
