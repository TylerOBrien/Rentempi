/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Local Imports
*/

import { View, Text } from '~/components/Base';
import { Row } from '~/components/Grid';
import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface DividerProps {
  label: String;
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function Divider(props:DividerProps) {
  /** Helpers **/

  const tailwind = {
    container: Tailwind.get(props.tailwind, 'container', props.tailwind),
    line: Tailwind.get(props.tailwind, 'line'),
    label: Tailwind.get(props.tailwind, 'label')
  };

  /** Renderers **/

  /**
   * 
   */
  const renderLine = () => (
    <View onLayout={ props.onLayout } tailwind={[ 'w-full h-px', tailwind.container ]} />
  );
  
  /**
   * 
   */
  const renderLabeledLine = () => (
    <Row onLayout={ props.onLayout } tailwind={[ 'items-center', tailwind.container ]}>
      <View tailwind={[ 'flex-auto h-px', tailwind.line ]} />
      <View tailwind='px-4'>
        <Text tailwind={[ 'text-lg', tailwind.label ]}>
          { props.label }
        </Text>
      </View>
      <View tailwind={[ 'flex-auto h-px', tailwind.line ]} />
    </Row>
  );

  /** Output **/

  return props.label ? renderLabeledLine() : renderLine();
}
