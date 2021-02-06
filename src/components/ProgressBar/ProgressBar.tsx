/**
 * Global Imports
*/

import React from 'react';
import { ColorValue, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { StyleProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

interface BarPartProps {
  progress: number;
  color: ColorValue;
}

export interface ProgressBarProps {
  progress: number;
}

/**
 * Locals
*/

function BarPart(props:BarPartProps) {
  return (
    <View
      style={{
        width: `${ props.progress }%`,
        height: 3,
        backgroundColor: 'bg-green-400'
      }}
    />
  );
}

/**
 * Exports
*/

export function ProgressBar(props:ProgressBarProps) {
  /** Helpers **/

  if (props.progress < 0 || props.progress > 100) {
    throw new Error;
  }

  /** Output **/

  return (
    <View style={ styles.container }>
      <View style={ styles.inner }>
        <BarPart
          progress={ props.progress }
          color='red'
        />
        <BarPart
          progress={ 100 - props.progress }
          color='gray'
        />
      </View>
      <View style={ styles.percentage }>
        <Text>
          { Math.round(props.progress) }%
        </Text>
      </View>
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  percentage: {
    justifyContent: 'center',
    paddingLeft: 12
  }
});
