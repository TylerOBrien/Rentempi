/**
 * Global Imports
*/

import React from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { ForgotPasswordFields, ForgotPasswordForm, ForgotPasswordFormContext } from '~/forms/Guest/ForgotPasswordForm';
import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

import { ForgotPasswordAuthResponse } from '~/services/Auth';

/**
 * Types/Interfaces
*/

export interface ForgotPasswordProps {
  
}

/**
 * Locals
*/

const ForgotPasswordContext = React.createContext<ForgotPasswordFormContext>(undefined);

/**
 * Exports
*/

export function ForgotPassword(props:ForgotPasswordProps) {
  /** Hooks **/
  
  const form = useForm();
  const service = useService();
  
  /** Event Handlers **/
  
  const handleSuccess = (response:ForgotPasswordAuthResponse) => {
    
  };
  
  const handleSubmit = (values:ForgotPasswordFields, formik:FormikHelpers<ForgotPasswordFields>) => {
    service.call<ForgotPasswordAuthResponse>('Auth.ForgotPassword', values)
      .then(handleSuccess)
      .catch(error => form.handleError(formik, error));
  };
  
  /** Output **/
  
  return (
    <ForgotPasswordContext.Provider value={{  }}>
      <PrimaryGuestLayout>
        <ForgotPasswordForm
          context={ ForgotPasswordContext }
          onSubmit={ handleSubmit }
        />
      </PrimaryGuestLayout>
    </ForgotPasswordContext.Provider>
  );
}

export const ForgotPasswordConfig = {
  stack: {
    name: 'Forgot Password',
    component: ForgotPassword,
    options: {
      headerShown: false
    }
  }
};
