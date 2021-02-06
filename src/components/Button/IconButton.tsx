/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Button } from './Button';

/**
 * Types/Interfaces
*/

export interface IconButtonProps extends TailwindEnabledProps {
  icon: ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  container?: FunctionComponent<TailwindEnabledProps>;
  children?: ReactNode;
  onPress: Function;
}

export interface IconButtonLabelProps extends TailwindEnabledProps {
  label?: string;
  loading?: boolean;
}

/**
 * Locals
*/

function IconButtonLabel(props:IconButtonLabelProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'label', false, false)
  };

  /** Output **/

  return (
    <Text style={ styles.label } tailwind={ tailwinds.container }>
      { props.label }
    </Text>
  );
}

/**
 * Exports
*/

export function IconButton(props:IconButtonProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <Button
      style={ props.style }
      tailwind={ tailwinds.container }
      onLayout={ props.onLayout }
      onPress={ props.onPress }
    >
      <View style={ styles.inner }>
        <View>
          { props.icon }
        </View>
        {
          props.label && <IconButtonLabel { ...props } />
        }
      </View>
    </Button>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row'
  },

  label: {
    alignSelf: 'center'
  }
});
