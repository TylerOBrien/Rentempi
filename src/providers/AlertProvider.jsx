/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';

/**
 * Exports
*/

export const AlertContext = React.createContext();

export function AlertProvider() {
  /** Refs **/

  const alertDataRef = useRef();
  const alertTotalCountRef = useRef();

  /** States **/

  const [ alerts, setAlerts ] = useState();
  
  /** Output **/
  
  return (
    <AlertContext.Provider value={{ alertDataRef, alertTotalCountRef, alerts, setAlerts }}>
      { props.children }
    </AlertContext.Provider>
  );
}
