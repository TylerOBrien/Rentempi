/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Exports
*/

/**
 * 
 */
export function Col(props) {
  return (
    <View
      style={ !props.style ? styles.col : [ styles.col, props.style ] }
      tailwind={ props.tailwind }
      onLayout={ props.onLayout }
    >
      { props.children }
    </View>
  );
}

Col.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column'
  }
});