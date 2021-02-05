/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Row } from '~/components/Grid';

/**
 * Types/Interfaces
*/

export interface ProgressBarProps {
  progress: number;
};

/**
 * Exports
*/

export function ProgressBar(props:ProgressBarProps) {
  return (
    <Row>
      <Row style={ styles.inner }>
        <View
          style={{
            width: ( Math.round(props.progress) || 0 ) + '%',
            height: 3,
            backgroundColor: 'bg-green-400'
          }}
        />
        <View
          style={{
            width: ( 100 - (Math.round(props.progress) || 0) ) + '%',
            height: 3,
            backgroundColor: 'bg-gray-800'
          }}
        />
      </Row>
      <View style={ styles.percentage }>
        <Text tailwind='text-gray-500'>{ Math.round(props.progress) || 0 }%</Text>
      </View>
    </Row>
  );
}

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
