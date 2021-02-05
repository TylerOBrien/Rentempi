/**
 * Global Imports
*/

import React, { ReactElement, ReactNode, useRef, useState } from 'react';
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

export function NetInfoProvider(props:NetInfoProviderProps):ReactElement<any> {
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
