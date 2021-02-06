/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Form, Input, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface ForgotPasswordFields {
  email: string;
}

export interface ForgotPasswordFormProps {
  context: React.Context<any>;
  onSubmit: FormikSubmit<ForgotPasswordFields>;
}

/**
 * Locals
*/
  
const initialValues:ForgotPasswordFields = {
  email: ''
};

/**
 * Exports
*/

export function ForgotPasswordForm(props:ForgotPasswordFormProps) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Renderers **/
  
  const renderForm = (formik:FormikProps<ForgotPasswordFields>) => (
    <Form>
      <Input
        name='email'
        label='Email Address'
      />
      <Submit
        label='Recover Account'
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
