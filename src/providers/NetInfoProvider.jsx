/**
 * Global Imports
*/

import React, { useRef, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

/**
 * Exports
*/

export const NetInfoContext = React.createContext();

/**
 * 
 */
export function NetInfoProvider(props) {
  /** Refs **/

  const unsubscribeRef = useRef();

  /** States **/

  const [ state, setState ] = useState();

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