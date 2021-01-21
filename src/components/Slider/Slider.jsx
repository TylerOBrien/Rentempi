/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

/**
 * Exports
*/

/**
 * 
 */
export function Slider(props) {
  /** Refs **/

  const panRef = useRef();
  const responderRef = useRef();
  const xWasRef = useRef();
  const valuesRef = useRef();
  const currentValueRef = useRef();

  /** Helpers **/

  const trackWidth = ( props.width - props.thumbSize );
  const touchableSize = ( props.thumbSize * 2 );

  /** Setup **/

  if (!panRef.current) {
    //
  }

  /** Output **/

  return (
    <View style={[ styles.container, { width: props.width } ]} onLayout={ props.onLayout }>

    </View>
  );
}

Slider.propTypes = {
  value: PropTypes.number,

  width: PropTypes.number,
  thumbSize: PropTypes.number,

  min: PropTypes.number,
  max: PropTypes.number,
  stride: PropTypes.number,

  onLayout: PropTypes.func,
  onValueChange: PropTypes.func
};

Slider.defaultProps = {
  thumbSize: 16
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  track: {
    position: 'absolute',
    top: '50%',
    height: 2,
    marginTop: -1,
    backgroundColor: '#55575f'
  }
});
