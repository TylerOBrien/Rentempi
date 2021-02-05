/**
 * Global Imports
*/

import React, { ReactNode, useState } from 'react';
import { StatusBarStyle } from 'react-native';

/**
 * Types/Interfaces
*/

export interface AppProviderProps {
  children: ReactNode;
};

export interface AppContextInterface {
  statusBarStyle: StatusBarStyle;
  setStatusBarStyle: React.Dispatch<React.SetStateAction<StatusBarStyle>>;
  isStatusBarHidden: boolean;
  setIsStatusBarHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Contexts
*/

export const AppContext = React.createContext<AppContextInterface>(undefined);

/**
 * Components
*/

export function AppProvider(props:AppProviderProps) {
  /** States **/

  const [ statusBarStyle, setStatusBarStyle ] = useState<StatusBarStyle>();
  const [ isStatusBarHidden, setIsStatusBarHidden ] = useState<boolean>();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ statusBarStyle, setStatusBarStyle, isStatusBarHidden, setIsStatusBarHidden }}>
      { props.children }
    </AppContext.Provider>
  );
}
