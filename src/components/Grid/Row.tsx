/**
 * Global Imports
*/

import React, { ReactElement, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Col } from './Col';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export interface RowProps extends TailwindEnabledProps {
  cols?: Cols;
  children?: ReactNode;
};

/**
 * Exports
*/

export function Row(props:RowProps) {
  /** Helpers **/

  const colStyle = !props.cols ? undefined : { width: `${ props.cols / 16 }%` };

  /** Renderers **/

  const renderColumn = (child:ReactElement):ReactElement => (
    (child.type === Col)
      ? child
      : <Col style={ colStyle }>{ child }</Col>
  );

  /** Output **/

  return (
    <View
      style={ !props.style ? styles.row : [ styles.row, props.style ] }
      tailwind={ props.tailwind }
      onLayout={ props.onLayout }
    >
      {
        !props.cols
          ? props.children 
          : React.Children.map(props.children, renderColumn)
      }
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});
