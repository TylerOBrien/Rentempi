/**
 * Global Imports
*/

import React, { useEffect, useRef, useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { RegisterForm, RegisterFormContext, RegisterFields } from '~/forms/guest/RegisterForm';
import { SideMenuGuestLayout } from '~/layouts/guest';
import { useAuth, useForm } from '~/hooks';
import { Identity, Secret, User } from '~/services';

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
  
  /** States **/
  
  const [ remember, setRemember ] = useState<boolean>();
  
  /** Side-Effects **/

  useEffect(() => form.clearErrors, []);
  
  /** Event Handlers **/
  
  /**
   * @return {Promise<void>}
   */
  const handleSubmit = async (values:RegisterFields, formik:FormikHelpers<RegisterFields>):Promise<void> => {
    const { user, token } = await User.store();

    const identity = await Identity.store({
      name: 'primary',
      type: 'email' as const,
      value: values.email
    }, token);

    const secret = await Secret.store({
      type: 'password' as const,
      value: values.password,
      confirmation: values.password_confirmation
    }, token);

    auth.login({ user, token }, { remember });
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
