/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { LoginFields, LoginForm, LoginFormContext } from '~/forms/Guest/LoginForm';
import { SideMenuGuestLayout } from '~/layouts/Guest';
import { LoginAuthResponse } from '~/services/Auth';

import { useAuth, useForm, useService } from '~/hooks';

/**
 * Sibling Imports
*/

import { SideMenu } from './components';

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
  
  /** Side-Effects **/

  useEffect(() => form.clearErrors, []);
  
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
      <SideMenuGuestLayout menu={ SideMenu }>
        <LoginForm
          context={ LoginContext }
          onSubmit={ handleSubmit }
        />
      </SideMenuGuestLayout>
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
