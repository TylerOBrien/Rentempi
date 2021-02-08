/**
 * Global Imports
*/

import React from 'react';
import { ColorValue } from 'react-native';

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
  labelPosition?: string;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
}

/**
 * Exports
*/

export function Password(props:PasswordProps) {
  return (
    <Input { ...props } secureTextEntry={ true } />
  );
}
