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
import { Tailwind } from '~/util';

/**
 * Locals
*/

function ButtonLabel(props) {
  /** Helpers **/

  const tailwinds = {
    label: Tailwind.get(props.tailwind, 'label', false, false),
    labelContainer: Tailwind.get(props.tailwind, 'labelContainer', false, false),
    loadingContainer: Tailwind.get(props.tailwind, 'loadingContainer', false, false)
  };

  /** Output **/

  return (
    <View tailwind={ tailwinds.labelContainer } style={ styles.labelContainer }>
      {
        props.loading &&
          <View tailwind={ tailwinds.loadingContainer } style={ styles.loadingContainer }>
            <ActivityIndicator
              color='white'
              animating={ props.loading }
            />
          </View>
      }
      <Text tailwind={ tailwinds.label }>
        { props.label }
      </Text>
    </View>
  );
}

/**
 * Exports
*/

export function Button(props) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <View style={ props.style } tailwind={ tailwinds.container } onLayout={ props.onLayout }>
      <Pressable
        disabled={ props.disabled }
        onPress={ () => requestAnimationFrame(props.onPress) }
      >
        <ButtonLabel { ...props } />
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,

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
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  labelContainer: {
    position: 'relative'
  }
});
