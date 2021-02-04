/**
 * Global Imports
*/

import React, { useState } from 'react';
import { StatusBarStyle } from 'react-native';

/**
 * Types/Interfaces
*/

export interface AppContextInterface {
  statusBarStyle:StatusBarStyle;
  setStatusBarStyle:React.Dispatch<React.SetStateAction<StatusBarStyle>>;
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

  const [ statusBarStyle, setStatusBarStyle ] = useState<StatusBarStyle>();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ statusBarStyle, setStatusBarStyle }}>
      { props.children }
    </AppContext.Provider>
  );
}
