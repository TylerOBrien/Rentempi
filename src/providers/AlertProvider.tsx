/**
 * Global Imports
*/

import React, { ReactNode, useRef, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface AlertProviderProps {
  children: ReactNode;
};

export interface AlertContextInterface {
  alerts: Array<string>;
  setAlerts: React.Dispatch<React.SetStateAction<Array<string>>>;
  alertDataRef: React.MutableRefObject<object>;
  alertTotalCountRef: React.MutableRefObject<number>;
};

/**
 * Contexts
*/

export const AlertContext = React.createContext<AlertContextInterface>(undefined);

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
