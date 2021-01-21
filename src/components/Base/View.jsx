/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { View as BaseView } from 'react-native';

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
export function View(props) {
  return React.createElement(BaseView, Tailwind.props(props));
}

View.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};