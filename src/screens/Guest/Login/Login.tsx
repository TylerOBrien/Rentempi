/**
 * Global Imports
*/

import React, { useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { LoginFields, LoginForm } from '~/forms/Guest/LoginForm';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface LoginProps {
  
};

export interface LoginContextInterface {
  form: FormHook;
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Locals
*/

const LoginContext = React.createContext<LoginContextInterface>(undefined);

/**
 * Exports
*/

export function Login(props:LoginProps) {
  /** Hooks **/
  
  const auth = useAuth();
  const form = useForm();
  const service = useService();
  
  /** States **/
  
  const [ remember, setRemember ] = useState<boolean>();
  
  /** Event Handlers **/
  
  const handleSuccess = async ({ user, token }) => {
    await auth.login({ user, token }, { remember });
  };
  
  const handleSubmit = (values:LoginFields, formik:FormikHelpers<LoginFields>) => {
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
