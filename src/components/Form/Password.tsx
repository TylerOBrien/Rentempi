/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { FormProps } from '~/util/Form';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Input } from './Input';

/**
 * Types/Interfaces
*/

export interface PasswordProps extends FormProps, TailwindEnabledProps {
  name: string;
}

/**
 * Exports
*/

export function Password(props:PasswordProps) {
  return (
    <Input
      name={ props.name }
      value={ props.value }
      initialValue={ props.initialValue }
      placeholder={ props.placeholder }
      placeholderTextColor={ props.placeholderTextColor }
      label={ props.label }
      labelType={ props.labelType }
      labelPosition={ props.labelPosition }
      style={ props.style }
      tailwind={ props.tailwind }
      secureTextEntry={ true }
      onChangeValue={ props.onChangeValue }
    />
  );
}
