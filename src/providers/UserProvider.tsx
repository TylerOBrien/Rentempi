/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Local Imports
*/

import { UserSchema } from '~/schemas';

/**
 * Types/Interfaces
*/

export interface UserContextInterface {
  user:UserSchema;
  setUser:React.Dispatch<React.SetStateAction<UserSchema>>;
};

/**
 * Exports
*/

export const UserContext = React.createContext<UserContextInterface>(undefined);

export function UserProvider(props:any) {
  /** States **/

  const [ user, setUser ] = useState<UserSchema>(undefined);

  /** Output **/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  );
}
