/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

/**
 * Local Imports
*/

import { StyleProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ModalTransition {
  type: 'fade' | 'slide';
  duration: number;
};

export interface ModalProps {
  visible?: boolean;
  backgroundColor?: string;
  transition?: ModalTransition;
  style?: StyleProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function Modal(props:ModalProps) {
  /** Refs **/

  const opacityRef = useRef<Animated.Value>();

  /** States **/

  const [ isActive, setIsActive ] = useState<boolean>();

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
  const animate = (isVisible:boolean) => {
    Animated.timing(opacityRef.current, {
      toValue: isVisible ? 1 : 0,
      duration: props.transition?.duration || 500,
      useNativeDriver: true
    }).start(() => {
      setIsActive(isVisible);
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
