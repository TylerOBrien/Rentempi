/**
 * Global Imports
*/

import React, { useContext, useEffect, useState } from 'react';
import BaseCheckBox from '@react-native-community/checkbox';

/**
 * Local Imports
*/

import { FormContext } from '~/providers/FormProvider';
import { FormFieldProps } from '~/util/Form';
import { TailwindProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Field } from './Field';
import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface CheckboxProps extends FormFieldProps, TailwindProps {
  name: string;
  checked?: boolean;
}

/**
 * Exports
*/

export function Checkbox(props:CheckboxProps) {
  /** Contexts **/

  const { errors } = useContext(FormContext);

  /** States **/

  const [ isChecked, setIsChecked ] = useState<boolean>(props.checked);

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
        value={ !!isChecked }
        component={ BaseCheckBox }
        changeHandler='onValueChange'
        onChangeValue={ setIsChecked }
      />
    </LabeledField>
  );
}

Checkbox.defaultProps = {
  labelPosition: 'after'
};
