/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { NetInfoContext } from '~/providers/NetInfoProvider';

/**
 * Types/Interfaces
*/

export interface NetInfoHook {
  isConnected:boolean;
  isInternetReachable:boolean;
}

/**
 * Exports
*/

export function useNetInfo():NetInfoHook {
  /** Contexts **/

  const { isConnected, isInternetReachable } = useContext(NetInfoContext);

  /** Output **/

  return {
    isConnected, isInternetReachable
  };
}
