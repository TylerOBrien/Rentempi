/**
 * Global Imports
*/

import React, { Dispatch, SetStateAction, ReactNode, createContext, useState } from 'react';
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
  setBackgroundColor: Dispatch<SetStateAction<ColorValue>>;

  flashMessagePosition: Position;
  setFlashMessagePosition: Dispatch<SetStateAction<Position>>;

  statusBarStyle: StatusBarStyle;
  setStatusBarStyle: Dispatch<SetStateAction<StatusBarStyle>>;

  isStatusBarHidden: boolean;
  setIsStatusBarHidden: Dispatch<SetStateAction<boolean>>;
}

/**
 * Contexts
*/

export const AppContext = createContext<AppContextInterface>(undefined);

/**
 * Components
*/

export function AppProvider(props:AppProviderProps) {
  /** States **/

  const [ backgroundColor,      setBackgroundColor ]      = useState<ColorValue>();
  const [ flashMessagePosition, setFlashMessagePosition ] = useState<Position>();
  const [ statusBarStyle,       setStatusBarStyle ]       = useState<StatusBarStyle>();
  const [ isStatusBarHidden,    setIsStatusBarHidden ]    = useState<boolean>();
  
  /** Output **/
  
  return (
    <AppContext.Provider
      value={{
        backgroundColor,      setBackgroundColor,
        flashMessagePosition, setFlashMessagePosition,
        statusBarStyle,       setStatusBarStyle,
        isStatusBarHidden,    setIsStatusBarHidden
      }}
    >
      { props.children }
    </AppContext.Provider>
  );
}
