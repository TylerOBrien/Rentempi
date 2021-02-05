/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
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

export interface EditPasswordFields {
  password: string;
  password_confirmation: string;
  password_current: string;
};

export interface EditPasswordFormProps {
  context: React.Context<unknown>;
  onSubmit: FormikSubmit<EditPasswordFields>;
};

/**
 * Locals
*/
  
const initialValues = {
  password: '',
  password_confirmation: '',
  password_current: ''
};

/**
 * Exports
*/

export function EditPasswordForm(props:EditPasswordFormProps) {
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
