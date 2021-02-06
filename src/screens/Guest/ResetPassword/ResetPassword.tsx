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

export interface ResetPasswordProps {
  
};

export interface ResetPasswordContextInterface {
  form: FormHook;
};

/**
 * Locals
*/

const ResetPasswordContext = React.createContext<ResetPasswordContextInterface>(undefined);

/**
 * Exports
*/

export function ResetPassword(props:ResetPasswordProps) {
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

export const ResetPasswordConfig = {
  stack: {
    name: 'Reset Password',
    headerShown: false,
    component: ResetPassword
  }
};
