/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Form } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface VerifyEmailFields {
  code: string;
}

export interface VeryEmailFormContext {
  
}

export interface VerifyEmailFormProps {
  context: React.Context<VeryEmailFormContext>;
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
      
    </Form>
  );
  
  /** Output **/
  
  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onSubmit }>
      { renderForm }
    </Formik>
  );
}
