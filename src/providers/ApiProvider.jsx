/**
 * Global Imports
*/

import React, { useContext } from 'react';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';
import { AuthContext } from '~/providers/AuthProvider';

/**
 * Exports
*/

export const ApiContext = React.createContext();

/**
 * 
 */
export function ApiProvider(props) {
  /** Contexts **/
  
  const { token } = useContext(AuthContext);
  
  /** Output **/
  
  return (
    <ApiContext.Provider value={{ credentials: { token, token_type: ApiConfig.token_type } }}>
      { props.children }
    </ApiContext.Provider>
  );
}