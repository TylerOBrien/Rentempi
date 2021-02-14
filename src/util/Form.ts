/**
 * Global Imports
*/

import { ColorValue } from 'react-native';

/**
 * Exports
*/

export type FormFieldValue = string | number | boolean | Date;
export type FormLabelType = 'contain' | 'outside';
export type FormLabelPosition = 'before' | 'after';

export interface FormProps {
  label?: string;
  labelType?: FormLabelType;
  labelPosition?: FormLabelPosition;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  value?: FormFieldValue;
  initialValue?: FormFieldValue;
  formik?: boolean;
  onChangeValue?: (value:FormFieldValue) => void;
}
