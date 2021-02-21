/**
 * Global Imports
*/

import React, { createContext, useRef, useState, MutableRefObject, ReactNode } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

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
  setCredentials: SetStateHandler<Authorization>;
  hasStorageRef: MutableRefObject<boolean>;
}

/**
 * Contexts
*/

export const AuthContext = createContext<AuthContextInterface>(undefined);

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
