/**
 * Global Imports
*/

import React, { Fragment, FunctionComponent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { ValuedField } from './ValuedField';

import { FormProps } from '~/util/Form';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Field, FieldComponent } from './Field';

/**
 * Types/Interfaces
*/

export interface LabeledFieldProps extends FormProps, TailwindEnabledProps {
  labelContainer?: FunctionComponent<TailwindEnabledProps>;
  children: ReactNode;
}

/**
 * Locals
*/

function LabeledFieldContainer(props:LabeledFieldProps) {
  /** Renderers **/

  const renderLabelContent = () => (
    <Text tailwind={ Tailwind.get(props.tailwind, 'label') || 'text-base' }>
      { props.label }
    </Text>
  );

  /** Output **/

  return (
    <props.labelContainer>
      { 
        props.labelPosition === 'before' && renderLabelContent()
      }
      {
        props.labelType === 'contain' && props.children
      }
      { 
        props.labelPosition === 'after' && renderLabelContent()
      }
    </props.labelContainer>
  );
}

function LabeledFieldBefore(props:LabeledFieldProps) {
  return (
    <Fragment>
      {
        props.label && React.createElement(LabeledFieldContainer, props)
      }
      {
        (!props.label || props.labelType === 'outside')
          ? props.children
          : null
      }
    </Fragment>
  );
}

function LabeledFieldAfter(props:LabeledFieldProps) {
  return (
    <Fragment>
      {
        (!props.label || props.labelType === 'outside')
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

export function LabeledField(props:LabeledFieldProps) {
  return (
    <Fragment>
      {
          props.labelPosition === 'before' ? React.createElement(LabeledFieldBefore, props)
        : props.labelPosition === 'after'  ? React.createElement(LabeledFieldAfter, props)
        : null
      }
    </Fragment>
  );
}

LabeledField.defaultProps = {
  container: View,
  labelContainer: View,
  labelType: 'outside',
  labelPosition: 'before'
};
