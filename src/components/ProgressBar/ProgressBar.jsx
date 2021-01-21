/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Row } from '~/components/Grid';

/**
 * Exports
*/

/**
 * 
 */
export function ProgressBar(props) {
  return (
    <Row>
      <Row style={ styles.inner }>
        <View
          style={{
            width: ( Math.round(props.progress) || 0 ) + '%',
            height: 3,
            backgroundColor: props.activeTailwind || 'bg-green-400'
          }}
        />
        <View
          style={{
            width: ( 100 - (Math.round(props.progress) || 0) ) + '%',
            height: 3,
            backgroundColor: props.inactiveTailwind || 'bg-gray-800'
          }}
        />
      </Row>
      <View style={ styles.percentage }>
        <Text tailwind='text-gray-500'>{ Math.round(props.progress) || 0 }%</Text>
      </View>
    </Row>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    alignItems: 'center'
  },

  percentage: {
    justifyContent: 'center',
    paddingLeft: 12
  }
});