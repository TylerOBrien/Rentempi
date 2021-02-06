/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { Platform } from 'react-native';
import { Formik, FormikProps } from 'formik';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Form, Input, Password, Submit } from '~/components/Form';
import { FormikSubmit } from '~/util/Formik';

/**
 * Types/Interfaces
*/

export interface LoginFields {
  email: string;
  password: string;
}

export interface LoginFormProps {
  context: React.Context<any>;
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
      />
      <Password
        name='password'
        label='Password'
      />
      <Submit
        label='Login'
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
