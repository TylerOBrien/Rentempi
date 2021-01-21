/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Pressable } from '~/components/Base';

/**
 * Exports
*/

export function BasicButton(props) {
  return (
    <Pressable
      disabled={ props.disabled }
      style={ props.style }
      tailwind={ props.tailwind }
      onLayout={ props.onLayout }
      onPress={ () => requestAnimationFrame(props.onPress) }
      android_ripple={ props.android_ripple }
    >
      { props.children }
    </Pressable>
  );
}

BasicButton.propTypes = {
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),

  disabled: PropTypes.bool,
  loading: PropTypes.bool,

  onLayout: PropTypes.func,
  onPress: PropTypes.func.isRequired,

  android_ripple: PropTypes.shape({
    radius: PropTypes.number,
    borderless: PropTypes.bool
  })
};

BasicButton.defaultProps = {
  android_ripple: {
    radius: 64,
    borderless: true
  }
};
