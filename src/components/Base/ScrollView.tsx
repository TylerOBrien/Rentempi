/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import {
  ScrollView as BaseScrollView,
  ScrollViewProps as BaseScrollViewProps } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindBaseProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ScrollViewProps extends BaseScrollViewProps {
  tailwind?: TailwindBaseProp;
  children?: ReactNode;
}

/**
 * Exports
*/

export function ScrollView(props:ScrollViewProps) {
  return React.createElement(BaseScrollView, Tailwind.props(props));
}
