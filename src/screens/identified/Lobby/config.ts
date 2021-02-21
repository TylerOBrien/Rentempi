/**
 * Sibling Imports
*/

import { Lobby } from './Lobby';

/**
 * Locals
*/

const name = 'Lobby';
const component = Lobby;

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
