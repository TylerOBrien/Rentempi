/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { Text as BaseText } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface TextProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function Text(props:TextProps) {
  return React.createElement(BaseText, Tailwind.props(props));
}
