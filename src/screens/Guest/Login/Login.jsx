/**
 * Global Imports
*/

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';

import { LoginForm } from '~/forms/Guest';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';

/**
 * Locals
*/

const LoginContext = React.createContext();

/**
 * Exports
*/

export function Login(props) {
  /** Hooks **/
  
  const auth = useAuth();
  const form = useForm();
  const navigation = useNavigation();
  const service = useService();
  
  /** States **/
  
  const [ remember, setRemember ] = useState();
  
  /** Event Handlers **/
  
  const handleSuccess = async ({ user, token }) => {
    await auth.login({ user, token }, { remember });
    navigation.reset({
      index: 0,
      routes: [ ScreenConfig.initial[user.status] ]
    });
  };
  
  const handleSubmit = (values, formik) => {
    service.call('Auth.Login', values)
      .then(handleSuccess)
      .catch(error => {
        form.setError(error);
        formik.setSubmitting(false);
      });
  };
  
  /** Output **/
  
  return (
    <LoginContext.Provider value={{ form, remember, setRemember }}>
      <PrimaryGuestLayout>
        <LoginForm
          context={ LoginContext }
          onSubmit={ handleSubmit }
        />
      </PrimaryGuestLayout>
    </LoginContext.Provider>
  );
}

export const LoginScreen = {
  stack: {
    name: 'Login',
    headerShown: false,
    component: Login
  }
};
