/**
 * Sibling Imports
*/

import { Register } from './Register';

/**
 * Locals
*/

const name = 'Register';
const component = Register;

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
