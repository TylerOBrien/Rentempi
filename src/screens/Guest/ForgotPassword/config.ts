/**
 * Sibling Imports
*/

import { ForgotPassword } from './ForgotPassword';

/**
 * Locals
*/

const name = 'Forgot Password';
const component = ForgotPassword;

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
