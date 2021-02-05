/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { TextInput as BaseTextInput } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface TextInputProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function TextInput(props:TextInputProps) {
  return React.createElement(BaseTextInput, Tailwind.props(props));
}
