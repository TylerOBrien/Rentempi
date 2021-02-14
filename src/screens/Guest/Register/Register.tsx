/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { RegisterForm, RegisterFormContext, RegisterFields } from '~/forms/Guest/RegisterForm';
import { SideMenuGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';

import { RegisterAuthResponse } from '~/services/Auth';

/**
 * Sibling Imports
*/

import { SideMenu } from './components';

/**
 * Types/Interfaces
*/

export interface RegisterProps {
  //
}

/**
 * Locals
*/

const RegisterContext = React.createContext<RegisterFormContext>(undefined);

/**
 * Exports
*/

export function Register(props:RegisterProps) {
  /** Hooks **/
  
  const auth = useAuth();
  const form = useForm();
  const service = useService();
  
  /** States **/
  
  const [ remember, setRemember ] = useState<boolean>();
  
  /** Side-Effects **/

  useEffect(() => form.clearErrors, []);
  
  /** Event Handlers **/
  
  /**
   * @return {void}
   */
  const handleSuccess = (response:RegisterAuthResponse):void => {
    auth.login({
      user: response.user,
      credentials: { token: response.token.value }
    }, {
      remember
    });
  };
  
  /**
   * @return {void}
   */
  const handleSubmit = (values:RegisterFields, formik:FormikHelpers<RegisterFields>):void => {
    service.call('Auth.Register', values)
      .then(handleSuccess)
      .catch(error => form.handleError(formik, error));
  };
  
  /** Output **/
  
  return (
    <RegisterContext.Provider value={{ remember, setRemember }}>
      <SideMenuGuestLayout menu={ SideMenu }>
        <RegisterForm
          context={ RegisterContext }
          onSubmit={ handleSubmit }
        />
      </SideMenuGuestLayout>
    </RegisterContext.Provider>
  );
}

export const RegisterConfig = {
  stack: {
    name: 'Register',
    component: Register,
    options: {
      headerShown: false
    }
  }
};
