/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { UserContext } from '~/providers/UserProvider';

/**
 * Exports
*/

/**
 * 
 */
export function useUser() {
  /** Contexts **/
  
  const { user, setUser } = useContext(UserContext);
  
  /** Helpers **/

  
  
  /** Output **/
  
  return {
    
  };
}