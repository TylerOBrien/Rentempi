/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { Pressable as BasePressable } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind, StyleProp, TailwindBaseProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface PressableProps {
  style?: StyleProp;
  styleUnpressed?: StyleProp;
  stylePressed?: StyleProp;
  tailwind?: TailwindBaseProp;
  tailwindUnpressed?: TailwindBaseProp;
  tailwindPressed?: TailwindBaseProp;

  delayLongPress?: Number;
  disabled?: Boolean;

  children?: ReactNode;
  
  onLayout?: Function;
  onPress?: Function;
  onLongPress?: Function;
}

/**
 * Exports
*/

export function Pressable({ style, ...props }:PressableProps) {
  /** Helpers **/

  const hasStyleChange = !!(props.stylePressed || props.styleUnpressed || props.tailwindPressed || props.tailwindUnpressed);

  /** Event Handlers **/

  const handleStyleChange = (isPressed:boolean):object => {
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
  };
  
  /** Output **/

  return React.createElement(BasePressable, Tailwind.props(props));
}
