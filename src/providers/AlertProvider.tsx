/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface AlertContextInterface {
  alerts:string[];
  setAlerts:React.Dispatch<React.SetStateAction<string[]>>;
  alertDataRef:React.MutableRefObject<object>;
  alertTotalCountRef:React.MutableRefObject<number>;
};

/**
 * Contexts
*/

export const AlertContext = React.createContext<AlertContextInterface>(undefined);

/**
 * Components
*/

export function AlertProvider(props:any) {
  /** Refs **/

  const alertDataRef = useRef<object>();
  const alertTotalCountRef = useRef<number>();

  /** States **/

  const [ alerts, setAlerts ] = useState<string[]>();
  
  /** Output **/
  
  return (
    <AlertContext.Provider value={{ alertDataRef, alertTotalCountRef, alerts, setAlerts }}>
      { props.children }
    </AlertContext.Provider>
  );
}