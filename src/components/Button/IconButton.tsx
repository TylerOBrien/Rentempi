/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { Row } from '~/components/Grid';
import { Tailwind } from '~/util';

/**
 * Sibling Imports
*/

import { BasicButton } from './BasicButton';

/**
 * Locals
*/

function IconButtonLabel(props) {
  return (
    <Text style={{ flex: 1 }}>
      { props.label }
    </Text>
  );
}

/**
 * Exports
*/

export function IconButton(props) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <BasicButton style={ props.style } tailwind={ tailwinds.container } onLayout={ props.onLayout }>
      <Row>
        <View>
          <props.icon />
        </View>
        {
          props.label && <IconButtonLabel { ...props } />
        }
      </Row>
    </BasicButton>
  );
}

IconButton.propTypes = {
  label: PropTypes.string,

  icon: PropTypes.node.isRequired,
  iconPosition: PropTypes.oneOf([ 'left', 'right' ]),

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),

  disabled: PropTypes.bool,
  loading: PropTypes.bool,

  onLayout: PropTypes.func,
  onPress: PropTypes.func.isRequired
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  
});
