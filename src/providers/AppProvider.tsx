/**
 * Global Imports
*/

import React, { createContext, useState, ReactNode } from 'react';
import { ColorValue, StatusBarStyle } from 'react-native';
import { Position } from 'react-native-flash-message';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextInterface {
  backgroundColor: ColorValue;
  flashMessagePosition: Position;
  statusBarStyle: StatusBarStyle;
  isStatusBarHidden: boolean;

  setBackgroundColor: SetStateHandler<ColorValue>;
  setFlashMessagePosition: SetStateHandler<Position>;
  setStatusBarStyle: SetStateHandler<StatusBarStyle>;
  setIsStatusBarHidden: SetStateHandler<boolean>;
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
