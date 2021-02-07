/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Animated, ColorValue, Dimensions, LayoutChangeEvent, ScaledSize, StyleSheet, View } from 'react-native';

/**
 * Local Imports
*/

import { StyleProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

interface ModalStyle {
  position: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ModalTransition {
  type: 'fade' | 'slide' | 'both';
  duration: number;
}

export interface ModalProps {
  visible?: boolean;
  transition?: ModalTransition;
  backgroundColor?: ColorValue;
  style?: StyleProp;
  children?: ReactNode;
  onLayout?: (event:LayoutChangeEvent) => void;
}

/**
 * Exports
*/

export function Modal(props:ModalProps) {
  /** Refs **/

  const styleRef = useRef<ModalStyle>();
  const containerViewRef = useRef<View>();
  const opacityRef = useRef<Animated.Value>();

  /** States **/

  const [ , setForceRender ] = useState<boolean>();
  const [ isActive, setIsActive ] = useState<boolean>();

  /** Setup **/

  const style:object = styleRef.current;
  const window:ScaledSize = Dimensions.get('window');

  /** Side-Effects **/

  useEffect(() => {
    opacityRef.current = new Animated.Value(0);
    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

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

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleRef = (view:View):void => {
    containerViewRef.current = view;
  };

  /**
   * @return {void}
   */
  const handleOrientationChange = ():void => {
    if (styleRef.current) {
      styleRef.current = null;
      setForceRender(current => !current);
    }
  };

  /**
   * @return {void}
   */
  const handleMeasureView = (width:number, height:number, px:number, py:number, fx:number, fy:number):void => {
    styleRef.current = {
      position: 'absolute',
      top: -fy,
      left: -fx,
      width: window.width,
      height: window.height
    };

    setForceRender(current => !current);
  };

  /**
   * @return {void}
   */
  const handleLayout = ():void => {
    if (!styleRef.current && containerViewRef.current) {
      containerViewRef.current.measure(handleMeasureView);
    }
  };

  /** Renderers **/

  /**
   * 
   */
  const renderActive = () => (
    <View style={ style || styles.container } ref={ handleRef } onLayout={ handleLayout }>
      <Animated.View style={[ styles.background, { opacity: opacityRef.current, backgroundColor: props.backgroundColor } ]} />
      <Animated.View style={{ opacity: opacityRef.current }}>
        <View style={ styles.inner }>
          { props.children }
        </View>
      </Animated.View>
    </View>
  );

  /** Output **/

  return (opacityRef.current ?? null) !== null && isActive ? renderActive() : null;
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
