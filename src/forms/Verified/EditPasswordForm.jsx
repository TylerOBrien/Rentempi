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

/**
 * Exports
*/

/**
 * 
 */
export function EditPasswordForm(props) {
  /** Contexts **/

  const context = useContext(props.context);

  /** Form **/
  
  const initialValues = {
    password: '',
    password_confirmation: '',
    password_current: ''
  };
  
  /** Renderers **/
  
  /**
   * 
   */
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

EditPasswordForm.propTypes = {
  context: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};