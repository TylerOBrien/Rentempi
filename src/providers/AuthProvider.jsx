/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Exports
*/

export const AuthContext = React.createContext();

export function AuthProvider(props) {
  /** States **/

  const [ token, setToken ] = useState();

  /** Output **/

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      { props.children }
    </AuthContext.Provider>
  );
}
