/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { LayoutChangeEvent, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View, Text } from '~/components/Base';
import { Tailwind, TailwindObject, TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

interface LineProps {
  tailwind?: TailwindObject;
  onLayout?: (event:LayoutChangeEvent) => void;
}

interface LabeledLineProps {
  label?: string;
  tailwind?: TailwindObject;
  onLayout?: (event:LayoutChangeEvent) => void;
}

export interface DividerProps extends TailwindProps {
  label?: string;
  children?: ReactNode;
}

/**
 * Locals
*/

function Line(props:LineProps) {
  return (
    <View
      style={ styles.line }
      tailwind={ Tailwind.get(props.tailwind) }
      onLayout={ props.onLayout }
    />
  );
}

function LabeledLine(props:LabeledLineProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container'),
    line: Tailwind.get(props.tailwind, 'line'),
    label: Tailwind.get(props.tailwind, 'label')
  };

  /** Output **/

  return (
    <View style={ styles.container } tailwind={ tailwinds.container } onLayout={ props.onLayout }>
      <View
        style={ styles.labeledLine }
        tailwind={ tailwinds.line }
      />
      <View style={ styles.inner }>
        <Text tailwind={ tailwinds.label ? [ 'text-lg', tailwinds.label ] : 'text-lg' }>
          { props.label }
        </Text>
      </View>
      <View
        style={ styles.labeledLine }
        tailwind={ tailwinds.line }
      />
    </View>
  );
}

/**
 * Exports
*/

export function Divider(props:DividerProps) {
  return React.createElement(
    props.label ? LabeledLine : Line, props
  );
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
