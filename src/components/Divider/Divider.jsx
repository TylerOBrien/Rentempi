/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { View, Text } from '~/components/Base';
import { Row } from '~/components/Grid';

import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function Divider(props) {
  /** Helpers **/

  const tailwind = {
    container: Tailwind.get(props.tailwind, 'container', props.tailwind),
    line: Tailwind.get(props.tailwind, 'line'),
    label: Tailwind.get(props.tailwind, 'label')
  };

  /** Renderers **/

  /**
   * 
   */
  const renderLine = () => (
    <View onLayout={ props.onLayout } tailwind={[ 'w-full h-px', tailwind.container ]} />
  );
  
  /**
   * 
   */
  const renderLabeledLine = () => (
    <Row onLayout={ props.onLayout } tailwind={[ 'items-center', tailwind.container ]}>
      <View tailwind={[ 'flex-auto h-px', tailwind.line ]} />
      <View tailwind='px-4'>
        <Text tailwind={[ 'text-lg', tailwind.label ]}>
          { props.label }
        </Text>
      </View>
      <View tailwind={[ 'flex-auto h-px', tailwind.line ]} />
    </Row>
  );

  /** Output **/

  return props.label ? renderLabeledLine() : renderLine();
}

Divider.propTypes = {
  label: PropTypes.string.isRequired,

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),

  onLayout: PropTypes.func
};