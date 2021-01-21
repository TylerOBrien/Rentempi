/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { TextInput as BaseTextInput } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function TextInput(props) {
  return React.createElement(BaseTextInput, Tailwind.props(props));
}

TextInput.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};