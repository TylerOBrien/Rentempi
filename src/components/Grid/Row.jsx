/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Col } from './Col';

/**
 * Exports
*/

/**
 * 
 */
export function Row(props) {
  /** Helpers **/

  const colWidth = ( props.cols && props.cols / 16 );

  /** Renderers **/

  /**
   * 
   */
  const renderChild = (child) => (
    ( child?.type === Col )
      ? child
      : <Col style={{ width: `${ colWidth }%` }}>{ child }</Col>
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
          : React.Children.map(props.children, renderChild)
      }
    </View>
  );
}

Row.propTypes = {
  cols: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]),

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  onLayout: PropTypes.func
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});