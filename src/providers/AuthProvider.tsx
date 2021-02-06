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
};

export interface AuthContextInterface {
  token: Authorization;
  setToken: React.Dispatch<React.SetStateAction<Authorization>>;
  hasTokenStorageRef: React.MutableRefObject<boolean>;
};

/**
 * Contexts
*/

export const AuthContext = React.createContext<AuthContextInterface>(undefined);

/**
 * Components
*/

export function AuthProvider(props:AuthProviderProps) {
  /** Refs **/

  const hasTokenStorageRef = useRef<boolean>();

  /** States **/

  const [ token, setToken ] = useState<Authorization>();

  /** Output **/

  return (
    <AuthContext.Provider value={{ token, setToken, hasTokenStorageRef }}>
      { props.children }
    </AuthContext.Provider>
  );
}
