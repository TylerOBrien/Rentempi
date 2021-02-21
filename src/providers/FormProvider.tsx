/**
 * Global Imports
*/

import React, { Dispatch, SetStateAction, ReactNode, createContext, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface FormProviderProps {
  children: ReactNode;
}

export interface FormContextInterface {
  errors: any;
  setErrors: Dispatch<SetStateAction<any>>;
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
