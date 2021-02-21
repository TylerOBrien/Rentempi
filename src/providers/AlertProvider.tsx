/**
 * Global Imports
*/

import React, { useRef, useState, MutableRefObject, ReactNode, createContext } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface AlertProviderProps {
  children: ReactNode;
}

export interface AlertContextInterface {
  alerts: Array<string>;
  setAlerts: SetStateHandler<Array<string>>;
  alertDataRef: MutableRefObject<object>;
  alertTotalCountRef: MutableRefObject<number>;
}

/**
 * Contexts
*/

export const AlertContext = createContext<AlertContextInterface>(undefined);

/**
 * Components
*/

export function AlertProvider(props:AlertProviderProps) {
  /** Refs **/

  const alertDataRef = useRef<object>();
  const alertTotalCountRef = useRef<number>();

  /** States **/

  const [ alerts, setAlerts ] = useState<Array<string>>();
  
  /** Output **/
  
  return (
    <AlertContext.Provider value={{ alertDataRef, alertTotalCountRef, alerts, setAlerts }}>
      { props.children }
    </AlertContext.Provider>
  );
}
