/**
 * Global Imports
*/

import PropTypes from 'prop-types';
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
  
  const renderForm = (formik) => {
    <Form>
      
    </Form>
  };
  
  /** Output **/
  
  return (
    <Formik initialValues={ initialValues } onSubmit={ props.onSubmit }>
      { renderForm }
    </Formik>
  );
}
