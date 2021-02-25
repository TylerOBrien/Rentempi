/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { ActivityIndicator, ColorValue, StyleSheet } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { Functional } from '~/util/Functional';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

interface ButtonBaseProps extends TailwindProps {
  label?: string;
  loading?: boolean;
  loadingColor?: ColorValue;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonBaseProps {
  iconName?: string;
  iconFamily?: typeof Icon;
  iconPosition?: 'left' | 'right' | 'center';
  container?: FunctionComponent<TailwindProps>;
  children?: ReactNode;
  onPress: () => void | Promise<void>;
}

/**
 * Locals
*/

function ButtonLabel(props:ButtonBaseProps) {
  /** Helpers **/

  const tailwinds = {
    label: Tailwind.get(props.tailwind, 'label'),
    labelContainer: Tailwind.get(props.tailwind, 'labelContainer'),
    loadingContainer: Tailwind.get(props.tailwind, 'loadingContainer')
  };

  /** Output **/

  return (
    <View style={ styles.labelContainer } tailwind={ tailwinds.labelContainer }>
      <View style={ styles.loadingContainer }>
        <ActivityIndicator
          color={ props.loadingColor || 'white' }
          animating={ props.loading }
        />
      </View>
      {
        props.label &&
          <Text style={ props.loading ? styles.labelLoading : undefined } tailwind={ tailwinds.label }>
            { props.label }
          </Text>
      }
    </View>
  );
}

ButtonLabel.defaultProps = {
  loading: false
};

/**
 * Exports
*/

export function Button(props:ButtonProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <Pressable
      style={ props.style ? [ styles.container, props.style ] : styles.container }
      tailwind={ tailwinds.container }
      disabled={ props.disabled }
      onPress={ Functional.delayed(props.onPress) }
      onLayout={ props.onLayout }
    >
      {
        props.children ||
          <ButtonLabel { ...props } />
      }
    </Pressable>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    /* alignSelf: 'flex-start' */
  },

  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  labelContainer: {
    position: 'relative'
  },

  labelLoading: {
    opacity: 0
  }
});
