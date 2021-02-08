/**
 * Global Imports
*/

import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Form, Input, Password, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface RegisterFields {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterFormContext {
  remember: boolean;
  setRemember: Dispatch<SetStateAction<boolean>>;
}

export interface RegisterFormProps {
  context: React.Context<any>;
  onSubmit: FormikSubmit<RegisterFields>;
}

/**
 * Locals
*/
  
const initialValues = {
  email: '',
  password: '',
  password_confirmation: ''
};

/**
 * Exports
*/

export function RegisterForm(props:RegisterFormProps) {
  /** Contexts **/

  const context = useContext(props.context);
  
  /** Renderers **/
  
  const renderForm = (formik:FormikProps<RegisterFields>) => (
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
      <Password
        name='password_confirmation'
        label='Confirm Password'
        labelPosition='after'
        tailwind={{
          input: 'input'
        }}
      />
      <Submit
        label='Create Account'
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
