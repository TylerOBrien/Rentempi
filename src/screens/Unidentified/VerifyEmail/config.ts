/**
 * Global Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Verify Email';
const component = ReactHelpers.lazy('VerifyEmail', import('./VerifyEmail'));

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
