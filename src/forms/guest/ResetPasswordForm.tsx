/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Form, Password, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface ResetPasswordFields {
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordFormContext {
  
}

export interface ResetPasswordFormProps {
  context: React.Context<any>;
  onSubmit: FormikSubmit<ResetPasswordFields>;
}

/**
 * Locals
*/
  
const initialValues = {
  password: '',
  password_confirmation: ''
};

/**
 * Exports
*/

export function ResetPasswordForm(props:ResetPasswordFormProps) {
  /** Contexts **/

  const context = useContext(props.context);
  
  /** Renderers **/
  
  const renderForm = (formik:FormikProps<ResetPasswordFields>) => (
    <Form>
      <Password
        name='password'
        label='Password'
      />
      <Password
        name='password_confirmation'
        label='Confirm Password'
      />
      <Submit
        label='Save New Password'
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
