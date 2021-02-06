/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import {
  View as BaseView,
  ViewProps as BaseViewProps } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, TailwindBaseProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ViewProps extends BaseViewProps {
  tailwind?: TailwindBaseProp;
  children?: ReactNode;
}

/**
 * Exports
*/

export function View(props:ViewProps) {
  return React.createElement(BaseView, Tailwind.props(props));
}
