/**
 * Global Imports
*/

import React from 'react';
import { ActivityIndicator, ColorValue, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { ThemeConfig } from '~/config';
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
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <View style={ styles.overlay } onLayout={ props.onLayout }>
      <View style={ props.style } tailwind={ tailwinds.container }>
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
    backgroundColor: ThemeConfig.color.primary
  }
});
