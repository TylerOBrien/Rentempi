/**
 * Sibling Imports
*/

import { Welcome } from './Welcome';

/**
 * Locals
*/

const name = 'Welcome';
const component = Welcome;

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
