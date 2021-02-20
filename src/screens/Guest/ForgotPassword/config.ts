/**
 * Global Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Forgot Password';
const component = ReactHelpers.lazy('ForgotPassword', import('./ForgotPassword'));

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
    headerShown: false,
    animationEnabled: false
  }
};

/**
 * Exports
*/

export { name, drawer, stack };
