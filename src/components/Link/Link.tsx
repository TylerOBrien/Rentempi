/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Tailwind, StyleProp, TailwindProp, TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface LinkContainerProps extends TailwindProps {
  disabled?: boolean;
  onPress: Function;
}

export interface LinkLabelContainerProps extends TailwindProps {
  //
}

export interface LinkProps extends TailwindProps {
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
      tailwind={ Tailwind.get(props.tailwind, 'label') }
      { ...props.labelContainerProps }
    >
      { props.label || props.to }
    </props.labelContainer>
  );
  
  /** Output **/
  
  return (
    <props.container
      tailwind={ Tailwind.get(props.tailwind, 'container') }
      { ...props.containerProps }
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
