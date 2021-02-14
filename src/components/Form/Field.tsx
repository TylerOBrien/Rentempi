/**
 * Global Imports
*/

import React, {
  ComponentClass,
  Dispatch,
  Fragment,
  FunctionComponent,
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState } from 'react';

import { ColorValue, NativeSyntheticEvent } from 'react-native';
import { Field as FormikField, useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { FormFieldValue } from '~/util/Form';
import { Tailwind, StyleProp, TailwindProp } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export type FieldContainer = FunctionComponent | ReactElement;
export type FieldComponent = FunctionComponent<object> | ComponentClass<object>;
export type FieldValue = FormFieldValue;
export type FieldValueChangeHandler = (value:FieldValue) => void;

export interface FieldProps {
  name: string;
  value?: FieldValue;
  initialValue?: FieldValue;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  component: FieldComponent;
  componentProps?: object;
  changeHandler?: string;
  changeValueHandler?: string;
  endEditingHandler?: string;
  style?: StyleProp;
  tailwind?: TailwindProp;
  formik?: boolean;
  onChange?: () => void;
  onChangeValue?: FieldValueChangeHandler | Dispatch<SetStateAction<boolean>>;
  onTouch?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeFocus?: (isFocused:boolean) => void;
}

/**
 * Exports
*/

export function Field(props:FieldProps) {
  /** Config **/

  const tailwinds = {
    field: Tailwind.get(props.tailwind, 'field')
  };

  /** Refs **/

  const isMountedRef = useRef<boolean>();

  /** Contexts **/

  const formik = props.formik ? useFormikContext() : null;

  /** States **/

  const [ value, setValue ] = useState<FieldValue>();

  const [ isFocused, setIsFocused ] = useState<boolean>();
  const [ isTouched, setIsTouched ] = useState<boolean>();

  /** Side-Effects **/

  useEffect(() => {
    if (isMountedRef.current) {
      if (props.onChangeValue) {
        props.onChangeValue(value);
      }
    }
  }, [ formik ? formik.values[props.name] : value ]);

  useEffect(() => {
    if (isMountedRef.current) {
      if (isFocused) {
        if (props.onFocus) {
          props.onFocus();
        }
      } else if (props.onBlur) {
        props.onBlur();
      }
    }
  }, [ isFocused ]);

  useEffect(() => {
    if (isMountedRef.current) {
      if (isTouched && props.onTouch) {
        props.onTouch();
      }
    } else {
      isMountedRef.current = true;
    }
  }, [ isTouched ]);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleChange = (event:FieldValue | NativeSyntheticEvent<any>):void => {
    switch (typeof event) {
    case 'string':
    case 'boolean':
    case 'number':
      return handleChangeValue(event);
    default:
      return handleChangeEvent(event);
    }
  };

  /**
   * @return {void}
   */
  const handleChangeEvent = (event:NativeSyntheticEvent<any>):void => {
    if (formik) {
      formik.setFieldValue(props.name, event.nativeEvent.text);
    } else {
      setValue(event.nativeEvent.text);
    }
  };

  /**
   * @return {void}
   */
  const handleChangeValue = (value:FieldValue):void => {
    if (formik) {
      formik.setFieldValue(props.name, value);
    } else {
      setValue(value);
    }
  };

  /**
   * @return {void}
   */
  const handleEndEditing = (event:NativeSyntheticEvent<any>):void => {
    //
  };

  /**
   * @return {void}
   */
  const handleFocus = (event:NativeSyntheticEvent<any>):void => {
    if (formik) {
      formik.setFieldTouched(props.name, true);
    } else {
      setIsTouched(true);
    }

    setIsFocused(true);
  };

  /**
   * @return {void}
   */
  const handleBlur = (event:NativeSyntheticEvent<any>):void => {
    setIsFocused(false);
  };

  /** Renderers **/

  /**
   * @return {ReactNode}
   */
  const renderField = ():ReactNode => (
    React.createElement(props.component,
      Object.assign({},
        props.componentProps,
        {
          name: props.name,
          value: props.value,
          tailwind: tailwinds.field,
          onFocus: handleFocus,
          onBlur: handleBlur
        },
        !props.changeHandler
          ? { onChange: handleChange }
          : { [props.changeHandler]: handleChange },
        !props.endEditingHandler
          ? null
          : { [props.endEditingHandler]: handleEndEditing }
      )
    )
  );

  /** Output **/

  return (
    <Fragment>
      {
        props.formik
          ? <FormikField name={ props.name }>{ renderField }</FormikField>
          : renderField()
      }
    </Fragment>
  );
}

Field.defaultProps = {
  formik: true
};
