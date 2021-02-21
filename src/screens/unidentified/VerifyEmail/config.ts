/**
 * Sibling Imports
*/

import { VerifyEmail } from './VerifyEmail';

/**
 * Locals
*/

const name = 'Verify Email';
const component = VerifyEmail;

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
