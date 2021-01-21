/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';

/**
 * Exports
*/

/**
 * 
 */
export function Link(props) {
  /** Hooks **/

  const navigation = useNavigation();

  /** Event Handlers **/

  /**
   * 
   */
  const handlePress = () => {
    navigation.navigate(props.to);
  };
  
  /** Renderers **/

  /**
   * 
   */
  const renderContainedLabel = () => (
    <props.labelContainer
      { ...props.labelContainerProps }
      tailwind={ getTailwind(props.tailwind, 'label', false) }
    >
      { props.label || props.to }
    </props.labelContainer>
  );
  
  /** Output **/
  
  return (
    <props.container
      { ...props.containerProps }
      tailwind={ getTailwind(props.tailwind, 'container') }
      disabled={ props.disabled }
      onPress={ handlePress }
    >
      { props.children || renderContainedLabel() }
    </props.container>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelContainer: PropTypes.func,
  labelContainerProps: PropTypes.object,

  container: PropTypes.func,
  containerProps: PropTypes.object,

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.string) ]),
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, ]),

  disabled: PropTypes.bool
};

Link.defaultProps = {
  container: Pressable,
  labelContainer: Text
};