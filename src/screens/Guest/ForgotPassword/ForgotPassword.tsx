/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
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

export interface ForgotPasswordProps {
  
};

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

export function ForgotPassword(props:ForgotPasswordProps) {
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

export const ForgotPasswordConfig = {
  stack: {
    name: 'Forgot Password',
    headerShown: false,
    component: ForgotPassword
  }
};
