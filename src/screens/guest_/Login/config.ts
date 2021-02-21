/**
 * Sibling Imports
*/

import { Login } from './Login';

/**
 * Locals
*/

const name = 'Login';
const component = Login;

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
