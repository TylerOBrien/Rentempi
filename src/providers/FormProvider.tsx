/**
 * Global Imports
*/

import React, { ReactNode, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface FormProviderProps {
  children: ReactNode;
}

export interface FormContextInterface {
  errors: any;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * Contexts
*/

export const FormContext = React.createContext<FormContextInterface>(undefined);

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
