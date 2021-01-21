/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';

/**
 * Exports
*/

export const WebSocketContext = React.createContext();

/**
 * 
 */
export function WebSocketProvider(props) {
  /** Refs **/

  const wsRef = useRef();

  /** States **/

  
  
  /** Output **/
  
  return (
    <WebSocketContext.Provider value={{ wsRef }}>
      { props.children }
    </WebSocketContext.Provider>
  );
}