/**
 * Global Imports
*/

import React, { Context, Dispatch, SetStateAction, useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Checkbox, Form, Input, Password, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';
import { FormHook } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface LoginFields {
  email: string;
  password: string;
}

export interface LoginFormContext {
  remember: boolean;
  setRemember: Dispatch<SetStateAction<boolean>>;
}

export interface LoginFormProps {
  context: Context<LoginFormContext>;
  onSubmit: FormikSubmit<LoginFields>;
}

/**
 * Locals
*/
  
const initialValues:LoginFields = {
  email: '',
  password: ''
};

/**
 * Exports
*/

export function LoginForm(props:LoginFormProps) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Renderers **/
  
  const renderForm = (formik:FormikProps<LoginFields>) => (
    <Form>
      <Input
        name='email'
        label='Email Address'
      />
      <Password
        name='password'
        label='Password'
      />
      <Checkbox
        name='remember_me'
        label='Remember Me'
        checked={ false }
      />
      <Submit
        label='Login'
      />
    </Form>
  );
  
  /** Output **/
  
  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onSubmit }>
      { renderForm }
    </Formik>
  );
}
