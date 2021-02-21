/**
 * Local Imports
*/

import { ScreenDriver } from '~/system/Screen';

/**
 * Exports
*/

export const ScreenConfig = {
  initial: {
    Guest: 'Welcome',
    Undentified: 'Identify',
    Identified: 'Lobby'
  },

  breakpoints: {
    sm: 400,
    md: 700,
    lg: 1000,
    xl: 1300
  },

  dimensions: ScreenDriver.dimensions()
};
