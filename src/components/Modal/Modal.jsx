/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

/**
 * Exports
*/

/**
 * 
 */
export function Modal(props) {
  /** Refs **/

  const opacityRef = useRef();

  /** States **/

  const [ isActive, setIsActive ] = useState();

  /** Setup **/

  if (!opacityRef.current) {
    opacityRef.current = new Animated.Value(0);
  }

  /** Side-Effects **/

  useEffect(() => {
    animate(props.visible);
  }, [ isActive ]);

  useEffect(() => {
    if (!isActive) {
      setIsActive(true);
    } else {
      animate(props.visible);
    }
  }, [ props.visible ]);

  /** Helpers **/

  /**
   * 
   */
  const animate = (isVisible) => {
    Animated.timing(opacityRef.current, {
      toValue: isVisible ? 1 : 0,
      duration: props.transition?.duration || 500,
      useNativeDriver: true
    }).start(() => {
      setIsActive(!!isVisible);
    });
  };

  /** Renderers **/

  /**
   * 
   */
  const renderActive = () => (
    <View style={ styles.container }>
      <Animated.View style={[ styles.background, { opacity: opacityRef.current, backgroundColor: props.backgroundColor } ]} />
      <Animated.View style={{ opacity: opacityRef.current }}>
        <View style={ styles.inner }>
          { props.children }
        </View>
      </Animated.View>
    </View>
  );

  /** Output **/

  return isActive ? renderActive() : null;
}

Modal.propTypes = {
  visible: PropTypes.bool,
  backgroundColor: PropTypes.string,
  transition: PropTypes.shape({
    type: PropTypes.oneOf([ 'fade' ]),
    duration: PropTypes.number
  }),
  
  onLayout: PropTypes.func
};

Modal.defaultProps = {
  visible: false,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  transition: {
    type: 'fade',
    duration: 500
  }
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});