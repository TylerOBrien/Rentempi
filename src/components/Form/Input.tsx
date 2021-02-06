/**
 * Global Imports
*/

import React from 'react';
import { ColorValue } from 'react-native';

/**
 * Local Imports
*/

import { TextInput } from '~/components/Base';
import { FormProps } from '~/util/Form';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface InputProps extends FormProps, TailwindEnabledProps {
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
};

/**
 * Exports
*/

export function Input({ style, placeholder, secureTextEntry, ...props }:InputProps) {
  /** Settings **/

  const config = {
    name: props.name,
    style,
    secureTextEntry,
    placeholder,
    tailwind: Tailwind.get(props.tailwind, 'input')
  };
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      <TextInput placeholderTextColor='#aaaaaa' { ...config } />
    </LabeledField>
  );
}
