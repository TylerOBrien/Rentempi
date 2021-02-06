/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Tailwind, StyleProp, TailwindProp, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface LinkContainerProps extends TailwindEnabledProps {
  disabled?: boolean;
  onPress: Function;
}

export interface LinkLabelContainerProps extends TailwindEnabledProps {
  
}

export interface LinkProps extends TailwindEnabledProps {
  to: string;
  container?: FunctionComponent<LinkContainerProps>;
  containerProps?: LinkContainerProps;
  label?: string;
  labelContainer?: FunctionComponent<LinkLabelContainerProps>;
  labelContainerProps?: LinkLabelContainerProps;
  disabled?: boolean;
  children?: ReactNode;
}

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
      tailwind={ Tailwind.get(props.tailwind, 'label', false, false) }
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
