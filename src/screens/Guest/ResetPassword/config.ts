/**
 * Sibling Imports
*/

import { ResetPassword } from './ResetPassword';

/**
 * Locals
*/

const name = 'Reset Password';
const component = ResetPassword;

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
