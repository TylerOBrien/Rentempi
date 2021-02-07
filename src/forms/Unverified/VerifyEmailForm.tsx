/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Form, Input, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface VerifyEmailFields {
  code: string;
}

export interface VerifyEmailFormContext {
  
}

export interface VerifyEmailFormProps {
  context: React.Context<VerifyEmailFormContext>;
  onSubmit: FormikSubmit<VerifyEmailFields>;
}

/**
 * Locals
*/

const initialValues = {
  code: ''
};

/**
 * Exports
*/

export function VerifyEmailForm(props:VerifyEmailFormProps) {
  /** Contexts **/

  const context = useContext(props.context);
  
  /** Renderers **/
  
  const renderForm = (formik:FormikProps<VerifyEmailFields>) => (
    <Form>
      <Input
        name='code'
        label='Verification Code'
      />
      <Submit
        label='Verify Account'
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
