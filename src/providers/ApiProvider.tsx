/**
 * Global Imports
*/

import React, { createContext, useContext, ReactNode } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/AuthProvider';
import { Authorization } from '~/util/Api'

/**
 * Types/Interfaces
*/

export interface ApiProviderProps {
  children: ReactNode;
}

export interface ApiContextInterface {
  credentials: Authorization;
}

/**
 * Contexts
*/

export const ApiContext = createContext<ApiContextInterface>(undefined);

/**
 * Components
 */

export function ApiProvider(props:ApiProviderProps) {
  /** Contexts **/
  
  const { credentials } = useContext(AuthContext);
  
  /** Output **/
  
  return (
    <ApiContext.Provider value={{ credentials }}>
      { props.children }
    </ApiContext.Provider>
  );
}
