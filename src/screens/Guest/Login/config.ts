/**
 * Global Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Login';
const component = ReactHelpers.lazy('Login', import('./Login'));

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
