/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { ReactElement, useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { PrimaryGuestLayout } from '~/layouts/Guest';

import { useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface ForgotPasswordContextInterface {
  form: FormHook;
};

/**
 * Locals
*/

const ForgotPasswordContext = React.createContext<ForgotPasswordContextInterface>(undefined);

/**
 * Exports
*/

export function ForgotPassword(props:any):ReactElement<any> {
  /** Hooks **/
  
  const form = useForm();
  const navigation = useNavigation();
  const service = useService();

  /** Contexts **/
  
  
  /** States **/
  
  
  /** Side-Effects **/
  
  
  /** Event Handlers **/
  
  
  /** Renderers **/
  
  
  /** Output **/
  
  return (
    <PrimaryGuestLayout>
      
    </PrimaryGuestLayout>
  );
}

export const ForgotPasswordScreen = {
  stack: {
    name: 'ForgotPassword',
    headerShown: false,
    component: ForgotPassword
  }
};
