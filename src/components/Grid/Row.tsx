/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Col } from './Col';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export interface RowProps extends TailwindEnabledProps {
  cols?: Cols;
  children?: ReactNode;
}

/**
 * Locals
*/

const maxCols = 16;

/**
 * Exports
*/

export function Row(props:RowProps) {
  /** Tailwind **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Renderers **/

  /**
   * @return {JSX.Element}
   */
  const renderColumn = (child:JSX.Element):JSX.Element => (
    (child.type === Col)
      ? child
      : <Col style={ styles['col' + props.cols] }>
          { child }
        </Col>
  );

  /** Output **/

  return (
    <View
      style={ !props.style ? styles.row : [ styles.row, props.style ] }
      tailwind={ tailwinds.container }
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
  },

  col1: {
    width: (1 / maxCols) * 100 + '%'
  },

  col2: {
    width: (2 / maxCols) * 100 + '%'
  },

  col3: {
    width: (3 / maxCols) * 100 + '%'
  },

  col4: {
    width: (4 / maxCols) * 100 + '%'
  },

  col5: {
    width: (5 / maxCols) * 100 + '%'
  },

  col6: {
    width: (6 / maxCols) * 100 + '%'
  },

  col7: {
    width: (7 / maxCols) * 100 + '%'
  },

  col8: {
    width: (8 / maxCols) * 100 + '%'
  },

  col9: {
    width: (9 / maxCols) * 100 + '%'
  },

  col10: {
    width: (10 / maxCols) * 100 + '%'
  },

  col11: {
    width: (11 / maxCols) * 100 + '%'
  },

  col12: {
    width: (12 / maxCols) * 100 + '%'
  },

  col13: {
    width: (13 / maxCols) * 100 + '%'
  },

  col14: {
    width: (14 / maxCols) * 100 + '%'
  },

  col15: {
    width: (15 / maxCols) * 100 + '%'
  },

  col16: {
    width: (16 / maxCols) * 100 + '%'
  }
});
