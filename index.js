/**
 * Global Imports
*/

import { AppRegistry } from 'react-native';

/**
 * Local Imports
*/

import { App } from './App';
import { name } from './app.json';

/**
 * Locals
*/

AppRegistry.registerComponent(name, () => App);
