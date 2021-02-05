/**
 * Global Imports
*/

import React, { ReactElement, ReactNode, useState } from 'react';

/**
 * Local Imports
*/

import { UserModel } from '~/models';

/**
 * Types/Interfaces
*/

export interface UserProviderProps {
  children: ReactNode;
};

export interface UserContextInterface {
  user: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel>>;
};

/**
 * Contexts
*/

export const UserContext = React.createContext<UserContextInterface>(undefined);

/**
 * Components
*/

export function UserProvider(props:UserProviderProps):ReactElement<any> {
  /** States **/

  const [ user, setUser ] = useState<UserModel>();

  /** Output **/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  );
}
