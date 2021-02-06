/**
 * Global Imports
*/

import React, { ReactNode, useRef, useState } from 'react';

/**
 * Local Imports
*/

import { Authorization } from '~/util/Api';

/**
 * Types/Interfaces
*/

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  credentials: Authorization;
  setCredentials: React.Dispatch<React.SetStateAction<Authorization>>;
  hasStorageRef: React.MutableRefObject<boolean>;
}

/**
 * Contexts
*/

export const AuthContext = React.createContext<AuthContextInterface>(undefined);

/**
 * Components
*/

export function AuthProvider(props:AuthProviderProps) {
  /** Refs **/

  const hasStorageRef = useRef<boolean>();

  /** States **/

  const [ credentials, setCredentials ] = useState<Authorization>();

  /** Output **/

  return (
    <AuthContext.Provider value={{ credentials, setCredentials, hasStorageRef }}>
      { props.children }
    </AuthContext.Provider>
  );
}
