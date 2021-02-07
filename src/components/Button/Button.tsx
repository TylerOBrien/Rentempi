/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { Functional } from '~/util/Functional';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ButtonProps extends TailwindEnabledProps {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  container?: FunctionComponent<TailwindEnabledProps>;
  children?: ReactNode;
  onPress: Function;
}

export interface ButtonLabelProps extends TailwindEnabledProps {
  label?: string;
  loading?: boolean;
}

/**
 * Locals
*/

function ButtonLabel(props:ButtonLabelProps) {
  /** Helpers **/

  const tailwinds = {
    label: Tailwind.get(props.tailwind, 'label', false, false),
    labelContainer: Tailwind.get(props.tailwind, 'labelContainer', false, false),
    loadingContainer: Tailwind.get(props.tailwind, 'loadingContainer', false, false)
  };

  /** Output **/
  
  return (
    <View style={ styles.labelContainer } tailwind={ tailwinds.labelContainer }>
      <View style={ styles.loadingContainer }>
        <ActivityIndicator
          color='red'
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
      style={ styles.container }
      tailwind={ tailwinds.container }
      disabled={ props.disabled }
      onPress={ Functional.delayed(props.onPress) }
      onLayout={ props.onLayout }
    >
      { props.children || <ButtonLabel { ...props } /> }
    </Pressable>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start'
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
