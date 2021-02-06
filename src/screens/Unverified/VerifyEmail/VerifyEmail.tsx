/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { PrimaryUnverifiedLayout } from '~/layouts/Unverified';

import { useForm, useService } from '~/hooks';
import { FormHook } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface VerifyEmailProps {
  
}

export interface VerifyEmailContextInterface {
  form: FormHook;
}

/**
 * Locals
*/

const VerifyEmailContext = React.createContext<VerifyEmailContextInterface>(undefined);

/**
 * Exports
*/

export function VerifyEmail(props:VerifyEmailProps) {
  /** Hooks **/
  
  const form = useForm();
  const navigation = useNavigation();
  const service = useService();
  
  /** Output **/
  
  return (
    <PrimaryUnverifiedLayout>
      
    </PrimaryUnverifiedLayout>
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
