/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { Pressable as BasePressable } from 'react-native';

/**
 * Local Imports
*/

import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Pressable({ style, ...props }) {
  /** Event Handlers **/

  /**
   * 
   */
  const handleStyleChange = (isPressed) => {
    const parsed = props.tailwind ? Tailwind.parse(props.tailwind) : {};
    const changeStyle = isPressed ? props.stylePressed : props.styleUnpressed;
    const changeTailwind = isPressed ? props.tailwindPressed : props.tailwindUnpressed;

    if (style) {
      Object.assign(parsed, style);
    }

    if (changeTailwind) {
      Object.assign(parsed, Tailwind.parse(changeTailwind));
    }

    if (changeStyle) {
      Object.assign(parsed, changeStyle);
    }

    return parsed;
  };
  
  /** Output **/

  return React.createElement(BasePressable, Object.assign({ style: handleStyleChange }, props));
}

Pressable.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  pressedStyle: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  unpressedStyle: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  pressedTailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  unpressedTailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,

  onLayout: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};