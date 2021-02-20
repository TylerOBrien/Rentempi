/**
 * Global Imports
*/

import React from 'react';
import { ColorValue } from 'react-native';

/**
 * Local Imports
*/

import { FormFieldProps } from '~/util/Form';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface SelectProps extends FormFieldProps, TailwindProps {
  //
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
