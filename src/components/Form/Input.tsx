/**
 * Global Imports
*/

import React, { useContext } from 'react';

/**
 * Local Imports
*/

import { Text, TextInput } from '~/components/Base';
import { FormContext } from '~/providers/FormProvider';
import { FormProps } from '~/util/Form';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Field } from './Field';
import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface InputProps extends FormProps, TailwindEnabledProps {
  name: string;
  secureTextEntry?: boolean;
}

/**
 * Exports
*/

export function Input(props:InputProps) {
  /** Contexts **/

  const { errors } = useContext(FormContext);

  /** Helpers **/

  const hasError = !!( errors && props.name in errors );
  
  /** Output **/

  return (
    <LabeledField
      label={ props.label }
      labelType={ props.labelType }
      labelPosition={ props.labelPosition }
    >
      <Field
        name={ props.name }
        value={ props.value }
        initialValue={ props.initialValue }
        placeholder={ props.placeholder }
        placeholderTextColor={ props.placeholderTextColor }
        component={ TextInput }
        tailwind={ props.tailwind }
        formik={ props.formik }
      />
      {
        hasError &&
          <Text tailwind='text-red-600'>
            { errors[props.name] }
          </Text>
      }
    </LabeledField>
  );
}
