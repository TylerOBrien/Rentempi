/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Types/Interfaces
*/

export interface AppContextInterface {
  statusBarStyle:string;
  setStatusBarStyle:React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Contexts
*/

export const AppContext = React.createContext<AppContextInterface>(undefined);

/**
 * Components
*/

export function AppProvider(props:any) {
  /** States **/

  const [ statusBarStyle, setStatusBarStyle ] = useState<string>();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ statusBarStyle, setStatusBarStyle }}>
      { props.children }
    </AppContext.Provider>
  );
}
