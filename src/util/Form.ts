/**
 * Exports
*/

export interface FormProps {
  name: string;
  label?: string;
  value?: string;
  initialValue?: string;
  onChangeValue?: (value:string) => void;
}
