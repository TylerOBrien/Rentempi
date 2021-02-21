/**
 * Local Imports
*/

import { ReactHelpers } from '~/util/React';

/**
 * Locals
*/

const name = 'Welcome';
const component = ReactHelpers.suspended('Welcome', import('./Welcome'), null);

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
