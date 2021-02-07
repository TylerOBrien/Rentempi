/**
 * Global Imports
*/

import React, { useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { LoginFields, LoginForm, LoginFormContext } from '~/forms/Guest/LoginForm';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

import { LoginAuthResponse } from '~/services/Auth';

/**
 * Types/Interfaces
*/

export interface LoginProps {
  
}

/**
 * Locals
*/

const LoginContext = React.createContext<LoginFormContext>(undefined);

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
  
  const handleSuccess = (response:LoginAuthResponse) => {
    auth.login({
      user: response.user,
      credentials: { token: response.token.value }
    }, {
      remember
    });
  };
  
  const handleSubmit = (values:LoginFields, formik:FormikHelpers<LoginFields>) => {
    service.call<LoginAuthResponse>('Auth.Login', values)
      .then(handleSuccess)
      .catch(error => form.handleError(formik, error));
  };
  
  /** Output **/
  
  return (
    <LoginContext.Provider value={{ remember, setRemember }}>
      <PrimaryGuestLayout>
        <LoginForm
          context={ LoginContext }
          onSubmit={ handleSubmit }
        />
      </PrimaryGuestLayout>
    </LoginContext.Provider>
  );
}

export const LoginConfig = {
  stack: {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false
    }
  }
};
