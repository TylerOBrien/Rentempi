/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface AuthContextInterface {
  token:string;
  setToken:React.Dispatch<React.SetStateAction<string>>;
  hasTokenStorageRef:React.MutableRefObject<boolean>;
};

/**
 * Contexts
*/

export const AuthContext = React.createContext<AuthContextInterface>(undefined);

/**
 * Components
*/

export function AuthProvider(props:any) {
  /** Refs **/

  const hasTokenStorageRef = useRef<boolean>();

  /** States **/

  const [ token, setToken ] = useState<string>();

  /** Output **/

  return (
    <AuthContext.Provider value={{ token, setToken, hasTokenStorageRef }}>
      { props.children }
    </AuthContext.Provider>
  );
}
