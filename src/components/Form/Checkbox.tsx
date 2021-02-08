/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';
import { ColorValue } from 'react-native';
import BaseCheckBox from '@react-native-community/checkbox';
import { useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { FormProps } from '~/util/Form';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface CheckboxProps extends FormProps, TailwindEnabledProps {
  labelPosition?: string;
  checked?: boolean;
}

/**
 * Exports
*/

export function Checkbox(props:CheckboxProps) {
  /** Hooks **/

  const formik = useFormikContext();

  /** States **/

  const [ isChecked, setIsChecked ] = useState<boolean>(props.checked);

  /** Helpers **/

  const hasError = props.name in formik.errors;
  
  /** Output **/

  return (
    <LabeledField { ...props }>
      <BaseCheckBox
        value={ isChecked }
        onValueChange={ setIsChecked }
      />
    </LabeledField>
  );
}
