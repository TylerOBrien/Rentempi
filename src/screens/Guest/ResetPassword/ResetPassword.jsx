/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { PrimaryGuestLayout } from '~/layouts/guest';

import { useForm, useService } from '~/hooks';

/**
 * Locals
*/

const ResetPasswordContext = React.createContext();

/**
 * Exports
*/

/**
 * 
 */
export function ResetPassword(props) {
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