/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ColProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function Col(props:ColProps) {
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

/**
 * Styles
*/

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column'
  }
});
