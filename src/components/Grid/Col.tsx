/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ColProps extends TailwindEnabledProps {
  children?: ReactNode;
}

/**
 * Exports
*/

export function Col(props:ColProps) {
  /** Tailwind **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <View
      style={ !props.style ? styles.col : [ styles.col, props.style ] }
      tailwind={ tailwinds.container }
      onLayout={ props.onLayout }
    >
      { props.children }
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column'
  }
});
