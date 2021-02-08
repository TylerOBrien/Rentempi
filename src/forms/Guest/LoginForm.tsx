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
        labelPosition='after'
        tailwind={{
          input: 'input'
        }}
      />
      <Password
        name='password'
        label='Password'
        labelPosition='after'
        tailwind={{
          input: 'input'
        }}
      />
      <Checkbox
        name='remember_me'
        label='Remember Me'
        labelPosition='after'
        checked={ false }
        tailwind={{
          container: 'flex-row items-center mt-8',
          label: 'ml-4 text-base'
        }}
      />
      <Submit
        label='Login'
        tailwind={{
          container: 'self-center btn mt-8 rounded-full bg-purple-800',
          label: 'btn-text text-white'
        }}
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
