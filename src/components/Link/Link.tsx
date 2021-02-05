/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface LinkProps {
  to: string;
  container?: FunctionComponent;
  containerProps?: any;
  label?: string;
  labelContainer?: FunctionComponent;
  labelContainerProps?: any;
  disabled?: boolean;
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function Link(props:LinkProps) {
  /** Hooks **/

  const navigation = useNavigation();

  /** Event Handlers **/

  const handlePress = () => {
    navigation.navigate(props.to);
  };
  
  /** Renderers **/

  const renderContainedLabel = () => (
    <props.labelContainer
      { ...props.labelContainerProps }
      tailwind={ Tailwind.get(props.tailwind, 'label', false) }
    >
      { props.label || props.to }
    </props.labelContainer>
  );
  
  /** Output **/
  
  return (
    <props.container
      { ...props.containerProps }
      tailwind={ Tailwind.get(props.tailwind, 'container') }
      disabled={ props.disabled }
      onPress={ handlePress }
    >
      { props.children || renderContainedLabel() }
    </props.container>
  );
}

Link.defaultProps = {
  container: Pressable,
  labelContainer: Text
};