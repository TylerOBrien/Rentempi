/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import {
  SafeAreaView as BaseSafeAreaView } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindClassNames } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface SafeAreaViewProps {
  tailwind?: TailwindClassNames;
  children?: ReactNode;
}

/**
 * Exports
*/

export function SafeAreaView(props:SafeAreaViewProps) {
  return React.createElement(BaseSafeAreaView, Tailwind.props(props));
}
