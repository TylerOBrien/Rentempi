/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { RegisterForm, RegisterFields } from '~/forms/Guest/RegisterForm';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useAuth, useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

import { RegisterAuthResponse } from '~/services/Auth';

/**
 * Types/Interfaces
*/

export interface RegisterProps {
  
}

export interface RegisterContextInterface {
  form: FormHook;
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Locals
*/

const RegisterContext = React.createContext<RegisterContextInterface>(undefined);

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
  
  const handleSuccess = (response:RegisterAuthResponse) => {
    auth.login({
      user: response.user,
      credentials: { token: response.token.value }
    }, {
      remember
    });
  };
  
  const handleSubmit = (values:RegisterFields, formik:FormikHelpers<RegisterFields>) => {
    service.call<RegisterAuthResponse>('Auth.Register', values)
      .then(handleSuccess)
      .catch(error => form.handleError(formik, error));
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

export const RegisterConfig = {
  stack: {
    name: 'Register',
    component: Register,
    options: {
      headerShown: false
    }
  }
};
