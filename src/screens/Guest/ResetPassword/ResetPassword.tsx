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

/**
 * 
 */
export function ResetPassword(props:any):ReactElement<any> {
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