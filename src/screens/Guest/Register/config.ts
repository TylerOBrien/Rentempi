/**
 * Global Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Register';
const component = ReactHelpers.lazy('Register', import('./Register'));

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
