/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import {
  Text as BaseText,
  TextProps as BaseTextProps } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface TextProps extends BaseTextProps {
  tailwind?: TailwindProp;
  children?: ReactNode;
}

/**
 * Exports
*/

export function Text(props:TextProps) {
  return React.createElement(BaseText, Tailwind.props(props));
}
