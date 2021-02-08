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

export interface ForgotPasswordFormContext {
  
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
        labelPosition='after'
        tailwind={{
          input: 'input'
        }}
      />
      <Submit
        label='Recover Account'
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
