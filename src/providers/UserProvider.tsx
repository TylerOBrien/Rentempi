/**
 * Global Imports
*/

import React, { createContext, useState, Dispatch, ReactNode, SetStateAction } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Local Imports
*/

import { UserModel } from '~/models';

/**
 * Types/Interfaces
*/

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserContextInterface {
  user: UserModel;
  setUser: SetStateHandler<UserModel>;
}

/**
 * Contexts
*/

export const UserContext = createContext<UserContextInterface>(undefined);

/**
 * Components
*/

export function UserProvider(props:UserProviderProps) {
  /** States **/

  const [ user, setUser ] = useState<UserModel>();

  /** Output **/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  );
}
