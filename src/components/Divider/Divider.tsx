/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View, Text } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface DividerProps extends TailwindEnabledProps {
  label?: string;
  children?: ReactNode;
}

/**
 * Exports
*/

export function Divider(props:DividerProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container', true, true, props.tailwind),
    line: Tailwind.get(props.tailwind, 'line', false, false),
    label: Tailwind.get(props.tailwind, 'label', false, false)
  };

  /** Renderers **/

  /**
   * @return {JSX.Element}
   */
  const renderLine = ():JSX.Element => (
    <View style={ styles.line } tailwind={ tailwinds.container } onLayout={ props.onLayout } />
  );
  
  /**
   * @return {JSX.Element}
   */
  const renderLabeledLine = ():JSX.Element => (
    <View style={ styles.container } tailwind={ tailwinds.container } onLayout={ props.onLayout }>
      <View style={ styles.labeledLine } tailwind={ tailwinds.line } />
      <View style={ styles.inner }>
        <Text tailwind={[ 'text-lg', tailwinds.label ]}>
          { props.label }
        </Text>
      </View>
      <View style={ styles.labeledLine } tailwind={ tailwinds.line } />
    </View>
  );

  /** Output **/

  return props.label ? renderLabeledLine() : renderLine();
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inner: {
    paddingLeft: 16,
    paddingRight: 16
  },
  line: {
    flex: 1,
    height: 1
  },
  labeledLine: {
    flex: 1,
    height: 1,
    marginTop: 2
  }
});
