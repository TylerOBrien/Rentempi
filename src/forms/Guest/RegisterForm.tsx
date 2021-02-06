/**
 * Global Imports
*/

import React, { useContext } from 'react';
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
};

export interface RegisterFormProps {
  context: React.Context<any>;
  onSubmit: FormikSubmit<RegisterFields>;
};

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
  
  const renderForm = (formik:FormikProps<RegisterFields>) => {
    <Form>
      <Input
        name='email'
        label='Email Address'
      />
      <Password
        name='password'
        label='Password'
      />
      <Password
        name='password_confirmation'
        label='Confirm Password'
      />
      <Submit
        label='Create'
      />
    </Form>
  };
  
  /** Output **/
  
  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onSubmit }>
      { renderForm }
    </Formik>
  );
}
