/**
 * Global Imports
*/

import React, { ReactNode, useRef, useState } from 'react';
import NetInfo, { NetInfoState, NetInfoSubscription } from '@react-native-community/netinfo';

/**
 * Types/Interfaces
*/

export interface NetInfoProviderProps {
  children: ReactNode;
};

/**
 * Contexts
*/

export const NetInfoContext = React.createContext<NetInfoState>(undefined);

/**
 * Provider
*/

export function NetInfoProvider(props:NetInfoProviderProps) {
  /** Refs **/

  const unsubscribeRef = useRef<NetInfoSubscription>();

  /** States **/

  const [ state, setState ] = useState<NetInfoState>();

  /** Setup **/

  if (!unsubscribeRef.current) {
    unsubscribeRef.current = NetInfo.addEventListener(setState);
  }
  
  /** Output **/
  
  return (
    <NetInfoContext.Provider value={ state }>
      { props.children }
    </NetInfoContext.Provider>
  );
}
