/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';

/**
 * Exports
*/

export const AuthContext = React.createContext();

export function AuthProvider(props) {
  /** Refs **/

  const hasTokenStorageRef = useRef();

  /** States **/

  const [ token, setToken ] = useState();

  /** Output **/

  return (
    <AuthContext.Provider value={{ hasTokenStorageRef, token, setToken }}>
      { props.children }
    </AuthContext.Provider>
  );
}
