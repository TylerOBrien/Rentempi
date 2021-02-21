/**
 * Global Imports
*/

import React, { createContext, useState, ReactNode } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface FormProviderProps {
  children: ReactNode;
}

export interface FormContextInterface {
  errors: any;
  setErrors: SetStateHandler<any>;
}

/**
 * Contexts
*/

export const FormContext = createContext<FormContextInterface>(undefined);

/**
 * Components
*/

export function FormProvider(props:FormProviderProps) {
  /** States **/

  const [ errors, setErrors ] = useState<any>();
  
  /** Output **/
  
  return (
    <FormContext.Provider value={{ errors, setErrors }}>
      { props.children }
    </FormContext.Provider>
  );
}
