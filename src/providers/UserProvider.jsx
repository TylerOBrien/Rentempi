/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Exports
*/

export const UserContext = React.createContext();

/**
 * 
 */
export function UserProvider(props) {
  /** States **/

  const [ user, setUser ] = useState();

  /** Output **/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  );
}