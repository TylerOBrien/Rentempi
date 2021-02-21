/**
 * Local Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Login';
const component = ReactHelpers.suspended('Login', import('./Login'), null);

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
