/**
 * Global Imports
*/

import React, { ReactNode, useState } from 'react';
import { ColorValue, StatusBarStyle } from 'react-native';
import { Position } from 'react-native-flash-message';

/**
 * Types/Interfaces
*/


export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextInterface {
  backgroundColor: ColorValue;
  setBackgroundColor: React.Dispatch<React.SetStateAction<ColorValue>>;
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

  const [ backgroundColor, setBackgroundColor ] = useState<ColorValue>();
  const [ flashMessagePosition, setFlashMessagePosition ] = useState<Position>();
  const [ statusBarStyle, setStatusBarStyle ] = useState<StatusBarStyle>();
  const [ isStatusBarHidden, setIsStatusBarHidden ] = useState<boolean>();
  
  /** Output **/
  
  return (
    <AppContext.Provider value={{ backgroundColor, setBackgroundColor, flashMessagePosition, setFlashMessagePosition, statusBarStyle, setStatusBarStyle, isStatusBarHidden, setIsStatusBarHidden }}>
      { props.children }
    </AppContext.Provider>
  );
}
