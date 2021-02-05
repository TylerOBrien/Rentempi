/**
 * Global Imports
*/

import React, { ReactElement, ReactNode, useContext } from 'react';

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
};

export interface ApiContextInterface {
  credentials:Authorization;
};

/**
 * Contexts
*/

export const ApiContext = React.createContext<ApiContextInterface>(undefined);

/**
 * Components
 */

export function ApiProvider(props:ApiProviderProps):ReactElement<any> {
  /** Contexts **/
  
  const { token } = useContext(AuthContext);
  
  /** Output **/
  
  return (
    <ApiContext.Provider value={{ credentials: { token } }}>
      { props.children }
    </ApiContext.Provider>
  );
}