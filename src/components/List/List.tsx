/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ListItem {

}

export interface ListProps extends TailwindEnabledProps {
  items: Array<ListItem>;
}

/**
 * Exports
*/

export function List(props:ListProps) {
  return (
    <View
      style={ !props.style ? styles.container : [ styles.container, props.style ] }
      tailwind={ props.tailwind }
      onLayout={ props.onLayout }
    >

    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {

  }
});
