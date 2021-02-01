/**
 * Global Imports
*/

import React, { useContext } from 'react';

/**
 * Local Imports
*/

import { UserModel } from '~/models';
import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface UserHook {
  user: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel>>;
};

/**
 * Exports
*/

export function useUser():UserHook {
  /** Contexts **/
  
  const { user, setUser } = useContext(UserContext);
  
  /** Output **/
  
  return {
    user, setUser
  };
}
