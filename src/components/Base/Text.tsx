/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { Text as BaseText } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

export function Text(props) {
  return React.createElement(BaseText, Tailwind.props(props));
}

Text.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};
