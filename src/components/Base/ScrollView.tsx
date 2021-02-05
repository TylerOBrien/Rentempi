/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { ScrollView as BaseScrollView } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ScrollViewProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function ScrollView(props:ScrollViewProps) {
  return React.createElement(BaseScrollView, Tailwind.props(props));
}
