/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { ColorValue } from 'react-native';
import { useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { Text, TextInput } from '~/components/Base';
import { FormContext } from '~/providers/FormProvider';
import { FormProps } from '~/util/Form';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface InputProps extends FormProps, TailwindEnabledProps {
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
};

/**
 * Exports
*/

export function Input({ style, placeholder, secureTextEntry, ...props }:InputProps) {
  /** Hooks **/

  const formik = useFormikContext();

  /** Contexts **/

  const { errors } = useContext(FormContext);

  /** Helpers **/

  const hasError = !!( errors && props.name in errors );

  /** Settings **/

  const config = {
    name: props.name,
    style,
    secureTextEntry,
    placeholder,
    tailwind: Tailwind.get(props.tailwind, 'input')
  };
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      <TextInput placeholderTextColor='#aaaaaa' { ...config } />
      <Text>
        { errors && errors[props.name] }
      </Text>
    </LabeledField>
  );
}
