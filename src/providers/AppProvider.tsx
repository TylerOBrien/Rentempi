/**
 * Global Imports
*/

import React, { ReactNode, useState } from 'react';
import { StatusBarStyle } from 'react-native';
import { Position } from 'react-native-flash-message';

/**
 * Types/Interfaces
*/


export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextInterface {
  flashMessagePosition: Position;
  setFlashMessagePosition: React.Dispatch<React.SetStateAction<Position>>;
  statusBarStyle: StatusBarStyle;
  setStatusBarStyle: React.Dispatch<React.SetStateAction<StatusBarStyle>>;
  isStatusBarHidden: boolean;
  setIsStatusBarHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Contexts
*/

export const AppContext = React.createContext<AppContextInterface>(undefined);

/**
 * Components
*/

export function AppProvider(props:AppProviderProps) {
  /** States **/

  const [ flashMessagePosition, setFlashMessagePosition ] = useState<Position>();
  const [ statusBarStyle, setStatusBarStyle ] = useState<StatusBarStyle>();
  const [ isStatusBarHidden, setIsStatusBarHidden ] = useState<boolean>();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ flashMessagePosition, setFlashMessagePosition, statusBarStyle, setStatusBarStyle, isStatusBarHidden, setIsStatusBarHidden }}>
      { props.children }
    </AppContext.Provider>
  );
}
