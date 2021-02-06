/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Exports
*/

/**
 * 
 */
export function Form(props) {
  if (props.container === Fragment) {
    return props.children;
  }

  return (
    <props.container style={ props.style } tailwind={ props.tailwind } onLayout={ props.onLayout }>
      { props.children }
    </props.container>
  );
}

Form.propTypes = {
  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.symbol ]),

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  
  onLayout: PropTypes.func
};

Form.defaultProps = {
  container: View
};