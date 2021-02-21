/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Form, Input, ItemPicker, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface ForgotPasswordFields {
  identity: {
    type: 'email';
    value: string;
  }
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
  identity: {
    type: 'email',
    value: ''
  }
};

const identityTypes = [
  {
    id: 1,
    name: 'Email Address'
  },
  {
    id: 2,
    name: 'Mobile Number'
  }
];

/**
 * Exports
*/

export function ForgotPasswordForm(props:ForgotPasswordFormProps) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Renderers **/
  
  const renderForm = (formik:FormikProps<ForgotPasswordFields>) => (
    <Form>
      <ItemPicker
        name='identity.type'
        initialValue={ identityTypes[0] }
        label='Type'
        labelPosition='after'
        items={ identityTypes }
        tailwind={{
          field: 'input',
          text: 'px-1 py-3'
        }}
      />
      <Input
        name='identity.value'
        label='Value'
        labelPosition='after'
        tailwind={{
          field: 'input'
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
