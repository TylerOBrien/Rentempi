/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import {
  Pressable as BasePressable,
  PressableProps as BasePressableProps } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindClassNames } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface PressableProps extends BasePressableProps {
  styleUnpressed?: StyleProp;
  stylePressed?: StyleProp;
  tailwind?: TailwindClassNames;
  tailwindUnpressed?: TailwindClassNames;
  tailwindPressed?: TailwindClassNames;
  children?: ReactNode;
}

/**
 * Exports
*/

export function Pressable(props:PressableProps) {
  /** Helpers **/

  //const hasStyleChange = !!(props.stylePressed || props.styleUnpressed || props.tailwindPressed || props.tailwindUnpressed);

  /** Event Handlers **/

  /* const handleStyleChange = (isPressed:boolean):object => {
    const parsed = props.tailwind ? Tailwind.props({ tailwind: props.tailwind }) : {};
    const changeStyle = isPressed ? props.stylePressed : props.styleUnpressed;
    const changeTailwind = isPressed ? props.tailwindPressed : props.tailwindUnpressed;

    if (style) {
      Object.assign(parsed, style);
    }

    if (changeTailwind) {
      Object.assign(parsed, Tailwind.props({ tailwind: changeTailwind }));
    }

    if (changeStyle) {
      Object.assign(parsed, changeStyle);
    }

    return parsed;
  }; */
  
  /** Output **/

  return React.createElement(BasePressable, Tailwind.props(props));
}
