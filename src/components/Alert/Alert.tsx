/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { AlertItem } from '~/hooks/Alerter';
import { TailwindProps } from '~/util/TailwindCss'

/**
 * Types/Interfaces
*/

export interface AlertProps extends AlertItem, TailwindProps {
  onClose: Function;
}

/**
 * Components
*/

export function Alert(props:AlertProps) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ props.value }</Text>
      <Pressable onPress={ props.onClose }>
        <FaIcon
          name='close'
          size={ 18 }
          style={ styles.icon }
        />
      </Pressable>
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 128,
    backgroundColor: 'red'
  },

  text: {
    color: 'white'
  },

  icon: {
    color: 'white',
    marginLeft: 8
  }
});
