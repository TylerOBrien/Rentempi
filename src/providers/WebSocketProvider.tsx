/**
 * Global Imports
*/

import React, { createContext, useRef, useState, MutableRefObject, ReactNode } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface WebSocketProviderProps {
  children: ReactNode;
}

export interface WebSocketContextInterface {
  isConnected: boolean;
  setIsConnected: SetStateHandler<boolean>;
  wsRef: MutableRefObject<object>;
}

/**
 * Contexts
*/

export const WebSocketContext = createContext<WebSocketContextInterface>(undefined);

/**
 * Components
*/

export function WebSocketProvider(props:WebSocketProviderProps) {
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
