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

export interface EditAccountFields {
  code: string;
};

export interface EditAccountFormProps {
  context: React.Context<unknown>;
  onSubmit: FormikSubmit<EditAccountFields>;
};

/**
 * Locals
*/
  
const initialValues = {
  code: ''
};

/**
 * Exports
*/

export function EditAccountForm(props:EditAccountFormProps) {
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
