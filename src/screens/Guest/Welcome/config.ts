/**
 * Global Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Welcome';
const component = ReactHelpers.lazy('Welcome', import('./Welcome'));

const drawer = {
  name,
  component,
  options: {
    //
  }
};

const stack = {
  name,
  component,
  options: {
    headerShown: false
  }
};

/**
 * Exports
*/

export { name, drawer, stack };
