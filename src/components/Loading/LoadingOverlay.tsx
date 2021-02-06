/**
 * Global Imports
*/

import React from 'react';
import { ActivityIndicator, ColorValue, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface LoadingOverlayProps extends TailwindEnabledProps {
  color: ColorValue;
  size: number | 'small' | 'large';
}

/**
 * Exports
*/

export function LoadingOverlay(props:LoadingOverlayProps) {
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

LoadingOverlay.defaultProps = {
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
