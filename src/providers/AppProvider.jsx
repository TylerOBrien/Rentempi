/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Exports
*/

export const AppContext = React.createContext();

export function AppProvider(props) {
  /** States **/

  const [ statusBarStyle, setStatusBarStyle ] = useState();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ statusBarStyle, setStatusBarStyle }}>
      { props.children }
    </AppContext.Provider>
  );
}
