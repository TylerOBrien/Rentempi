/**
 * Global Imports
*/

import React from 'react';
import { ColorValue } from 'react-native';

/**
 * Local Imports
*/

import { FormProps } from '~/util/Form';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface SelectProps extends FormProps, TailwindEnabledProps {
  placeholder?: string;
  placeholderTextColor?: ColorValue;
}

/**
 * Exports
*/

export function Select(props:SelectProps) {
  /** Settings **/

  
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      
    </LabeledField>
  );
}
