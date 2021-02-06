/**
 * Global Imports
*/

import React, { ReactNode, useContext } from 'react';

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

export const ApiContext = React.createContext<ApiContextInterface>(undefined);

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
