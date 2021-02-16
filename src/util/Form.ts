/**
 * Global Imports
*/

import { ColorValue } from 'react-native';

/**
 * Exports
*/

export type FormFieldValue = string | number | boolean;
export type FormLabelType = 'contain' | 'outside';
export type FormLabelPosition = 'before' | 'after';

export interface FormProps<T=FormFieldValue> {
  label?: string;
  labelType?: FormLabelType;
  labelPosition?: FormLabelPosition;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  value?: T;
  initialValue?: T;
  formik?: boolean;
  onChangeValue?: (value:T) => void;
}
