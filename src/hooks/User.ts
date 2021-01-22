/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface UserHook {
  
}

/**
 * Exports
*/

export function useUser():UserHook {
  /** Contexts **/
  
  const { user, setUser } = useContext(UserContext);
  
  /** Helpers **/

  
  
  /** Output **/
  
  return {
    
  };
}
