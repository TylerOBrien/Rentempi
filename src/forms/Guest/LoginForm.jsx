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

/**
 * Exports
*/

export function LoginForm(props) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Form **/
  
  const initialValues = {
    email: '',
    password: ''
  };
  
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

LoginForm.propTypes = {
  context: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};
