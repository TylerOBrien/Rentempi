/**
 * Global Imports
*/

import React from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { VerifyEmailFields, VerifyEmailForm, VerifyEmailFormContext } from '~/forms/Unverified/VerifyEmailForm';
import { PrimaryUnverifiedLayout } from '~/layouts/Unverified';
import {  } from '~/services';

import { useForm } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface VerifyEmailProps {
  
}

/**
 * Locals
*/

const VerifyEmailContext = React.createContext<VerifyEmailFormContext>(undefined);

/**
 * Exports
*/

export function VerifyEmail(props:VerifyEmailProps) {
  /** Hooks **/
  
  const form = useForm();
  
  /** Event Handlers **/
  
  const handleSuccess = (response:StoreEmailVerificationResponse) => {
    //
  };
  
  const handleSubmit = (values:VerifyEmailFields, formik:FormikHelpers<VerifyEmailFields>) => {
    /* service.call('EmailVerification.Store', values)
      .then(handleSuccess)
      .catch(error => form.handleError(formik, error)); */
  };
  
  /** Output **/
  
  return (
    <VerifyEmailContext.Provider value={{  }}>
      <PrimaryUnverifiedLayout>
        <VerifyEmailForm
          context={ VerifyEmailContext }
          onSubmit={ handleSubmit }
        />
      </PrimaryUnverifiedLayout>
    </VerifyEmailContext.Provider>
  );
}

export const VerifyEmailConfig = {
  stack: {
    name: 'Verify Email',
    component: VerifyEmail,
    options: {
      headerShown: false
    }
  }
};
