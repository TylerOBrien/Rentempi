/**
 * Global Imports
*/

import { ColorValue } from 'react-native';

/**
 * Exports
*/

export type FormFieldValue = string | number | boolean;
export type FormFieldLabelType = 'contain' | 'outside';
export type FormFieldLabelPosition = 'before' | 'after';

export interface FormFieldProps<T=FormFieldValue> {
  label?: string;
  labelType?: FormFieldLabelType;
  labelPosition?: FormFieldLabelPosition;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  value?: T;
  initialValue?: T;
  formik?: boolean;
  onChangeValue?: (value:T) => void | Promise<void>;
}
