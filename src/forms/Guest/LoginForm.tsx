/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { Platform } from 'react-native';
import { Formik } from 'formik';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Form } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface LoginFields {
  email: string;
  password: string;
};

export interface LoginFormProps {
  context: React.Context<any>;
  onSubmit: FormikSubmit<LoginFields>;
};

/**
 * Locals
*/
  
const initialValues = {
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
  
  const renderForm = (formik) => (
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
