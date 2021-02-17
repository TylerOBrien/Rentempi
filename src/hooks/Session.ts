/**
 * Global Imports
*/

import { Dispatch, SetStateAction, useContext } from 'react';

/**
 * Local Imports
*/

import { UserModel } from '~/models';
import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface SessionHook {
  user: UserModel;
  setUser: Dispatch<SetStateAction<UserModel>>;
}

/**
 * Exports
*/

export function useSession():SessionHook {
  /** Contexts **/
  
  const { user, setUser } = useContext(UserContext);
  
  /** Output **/
  
  return {
    user, setUser
  };
}
