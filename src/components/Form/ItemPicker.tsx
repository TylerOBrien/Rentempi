/**
 * Global Imports
*/

import React from 'react';
import { ColorValue } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface ItemPickerProps extends TailwindEnabledProps {
  name: string;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
};

/**
 * Exports
*/

export function ItemPicker(props:ItemPickerProps) {
  /** Settings **/

  
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      
    </LabeledField>
  );
}
