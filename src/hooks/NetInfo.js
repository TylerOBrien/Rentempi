/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { NetInfoContext } from '~/providers/NetInfoProvider';

/**
 * Exports
*/

/**
 * 
 */
export function useNetInfo() {
  /** Contexts **/

  const { isConnected, isInternetReachable } = useContext(NetInfoContext);

  /** Output **/

  return {
    isConnected, isInternetReachable
  };
}