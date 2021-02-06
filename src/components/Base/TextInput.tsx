/**
 * Global Imports
*/

import React from 'react';
import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface TextInputProps extends BaseTextInputProps {
  tailwind?: TailwindProp;
};

/**
 * Exports
*/

export function TextInput(props:TextInputProps) {
  return React.createElement(BaseTextInput, Tailwind.props(props));
}
