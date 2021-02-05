/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { View as BaseView } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ViewProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  children?: ReactNode;
  onLayout?: Function;
};

/**
 * Exports
*/

export function View(props:ViewProps) {
  return React.createElement(BaseView, Tailwind.props(props));
}
