/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Button } from './Button';

/**
 * Types/Interfaces
*/

export interface IconButtonProps extends TailwindProps {
  icon: ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  container?: FunctionComponent<TailwindProps>;
  children?: ReactNode;
  onPress: () => void;
}

export interface IconButtonLabelProps extends TailwindProps {
  label?: string;
  loading?: boolean;
}

/**
 * Locals
*/

function IconButtonLabel(props:IconButtonLabelProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'label')
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
      onPress={ props.onPress }
      onLayout={ props.onLayout }
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
