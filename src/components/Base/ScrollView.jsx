/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView as BaseScrollView } from 'react-native';

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
export function ScrollView(props) {
  return React.createElement(BaseScrollView, Tailwind.props(props));
}

ScrollView.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};