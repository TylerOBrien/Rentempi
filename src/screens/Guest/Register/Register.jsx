/**
 * Global Imports
*/

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';

import { RegisterForm } from '~/forms/Guest';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';

/**
 * Locals
*/

const RegisterContext = React.createContext();

/**
 * Exports
*/

export function Register(props) {
  /** Hooks **/
  
  const auth = useAuth();
  const form = useForm();
  const navigation = useNavigation();
  const service = useService();
  
  /** States **/
  
  const [ remember, setRemember ] = useState();
  
  /** Event Handlers **/
  
  const handleSuccess = async ({ user, token }) => {
    await auth.login({ user, token, remember });
    navigation.reset({
      index: 0,
      routes: [ ScreenConfig.initial[user.status] ]
    });
  };
  
  const handleSubmit = (values, formik) => {
    service.call('Auth.Register', values)
      .then(handleSuccess)
      .catch(error => {
        form.setError(error);
        formik.setSubmitting(false);
      });
  };
  
  /** Output **/
  
  return (
    <RegisterContext.Provider value={{ form, remember, setRemember }}>
      <PrimaryGuestLayout>
        <RegisterForm
          context={ RegisterContext }
          onSubmit={ handleSubmit }
        />
      </PrimaryGuestLayout>
    </RegisterContext.Provider>
  );
}
