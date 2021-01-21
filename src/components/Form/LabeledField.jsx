/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { ValuedField } from './ValuedField';

import { Tailwind } from '~/util/TailwindCss';

/**
 * Locals
*/

/**
 * 
 */
function LabeledFieldContainer(props) {
  /** Renderers **/

  const renderLabelContent = () => (
    <Text tailwind={ Tailwind.get(props.tailwind, 'label') }>
      { props.label }
    </Text>
  );

  /** Output **/

  return (
    <props.labelContainer>
      { 
        labelPosition === 'before' && renderLabelContent()
      }
      {
        labelType === 'contain' && props.children
      }
      { 
        labelPosition === 'after' && renderLabelContent()
      }
    </props.labelContainer>
  );
}

/**
 * 
 */
function LabeledFieldBefore(props) {
  <Fragment>
    {
      props.label && React.createElement(LabeledFieldContainer, props)
    }
    {
      (!props.label || labelType === 'outside')
        ? props.children
        : null
    }
  </Fragment>
}

/**
 * 
 */
function LabeledFieldAfter(props) {
  return (
    <Fragment>
      {
        (!props.label || labelType === 'outside')
          ? props.children
          : null
      }
      {
        props.label && React.createElement(LabeledFieldContainer, props)
      }
    </Fragment>
  );
}

/**
 * Exports
*/

export function LabeledField(props) {
  return (
    <ValuedField { ...props }  name={ props.name } value={ props.value } style={ props.style } tailwind={ props.tailwind }>
      {
          labelPosition === 'before' ? React.createElement(LabeledFieldBefore, props)
        : labelPosition === 'after'  ? React.createElement(LabeledFieldAfter, props)
        : null
      }
    </ValuedField>
  );
}

LabeledField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.func, PropTypes.node ]),

  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.node, PropTypes.symbol ]),

  labelContainer: PropTypes.func,
  labelType: PropTypes.oneOf([ 'outside', 'contain' ]),
  labelPosition: PropTypes.oneOf([ 'before', 'after' ]),

  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),

  hasError: PropTypes.bool
};

LabeledField.defaultProps = {
  container: View,
  labelContainer: View,
  labelType: 'outside',
  labelPosition: 'before'
};
