/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function LoadingOverlay(props) {
  return (
    <View style={ styles.overlay } onLayout={ props.onLayout }>
      <View style={ props.style } tailwind={ props.tailwind }>
        <ActivityIndicator
          color={ props.color }
          size={ props.size }
        />
      </View>
    </View>
  );
}

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};

Loading.defaultProps = {
  color: 'black',
  size: 64
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Tailwind.color('primary')
  }
});