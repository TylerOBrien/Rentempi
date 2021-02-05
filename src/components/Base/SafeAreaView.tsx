/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView as BaseSafeAreaView } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

export function SafeAreaView(props) {
  return React.createElement(BaseSafeAreaView, Tailwind.props(props));
}

SafeAreaView.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};
