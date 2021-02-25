/**
 * Global Imports
*/

import React, { useRef } from 'react';
import { Animated, PanResponder, LayoutChangeEvent, StyleSheet, View } from 'react-native';

/**
 * Types/Interfaces
*/

export interface SliderProps {
  value: number;
  width: number;
  thumbSize?: number;
  min: number;
  max: number;
  stride: number;
  onLayout?: (event:LayoutChangeEvent) => void | Promise<void>;
  onValueChange?: (value:number) => void | Promise<void>;
}

/**
 * Exports
*/

export function Slider(props:SliderProps) {
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
