/**
 * Global Imports
*/

import React, { ReactElement, ReactNode, useRef, useState } from 'react';

/**
 * Types/Interfaces
*/

export interface WebSocketProviderProps {
  children: ReactNode;
};

export interface WebSocketContextInterface {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  wsRef: React.MutableRefObject<object>;
};

/**
 * Exports
*/

export const WebSocketContext = React.createContext<WebSocketContextInterface>(undefined);

export function WebSocketProvider(props:WebSocketProviderProps):ReactElement<any> {
  /** Refs **/

  const wsRef = useRef<object>();

  /** States **/

  const [ isConnected, setIsConnected ] = useState<boolean>();
  
  /** Output **/
  
  return (
    <WebSocketContext.Provider value={{ isConnected, setIsConnected, wsRef }}>
      { props.children }
    </WebSocketContext.Provider>
  );
}
