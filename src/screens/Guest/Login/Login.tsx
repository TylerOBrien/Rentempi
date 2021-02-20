/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';

/**
 * Local Imports
*/

import { PaginateNavigation } from '~/components/Paginate';
import { LoginFields, LoginForm, LoginFormContext } from '~/forms/Guest/LoginForm';
import { SideMenuGuestLayout } from '~/layouts/Guest';
import { useAuth, useForm } from '~/hooks';
import { Token, StoreTokenResponse } from '~/services/Token';

/**
 * Sibling Imports
*/

import { SideMenu } from './components';

/**
 * Types/Interfaces
*/

export interface LoginProps {
  //
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
  
  /** States **/
  
  const [ remember, setRemember ] = useState<boolean>();
  
  /** Side-Effects **/

  useEffect(() => form.clearErrors, []);
  
  /** Event Handlers **/
  
  /**
   * @return {void}
   */
  const handleSuccess = (response:StoreTokenResponse):void => {
    auth.login(response, { remember });
  };
  
  /**
   * @return {void}
   */
  const handleSubmit = (values:LoginFields, formik:FormikHelpers<LoginFields>):void => {
    Token.store(values)
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
        <PaginateNavigation
          current={ 5 }
          total={ 50 }
          onNavigate={ page => {} }
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
