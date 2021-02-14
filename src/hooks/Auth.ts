/**
 * Global Imports
*/

import { useContext, useEffect, useRef } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/AuthProvider';
import { UserContext } from '~/providers/UserProvider';

import { TokenStorage } from '~/util';
import { Authorization } from '~/util/Api';

/**
 * Types/Interfaces
*/

export interface AuthLoginOptions {
  remember?: boolean;
}

export interface AuthLogin {
  user: any;
  token: Authorization;
}

export interface AuthHook {
  login: (auth:AuthLogin, options?:AuthLoginOptions) => Promise<void>;
  logout: () => Promise<void>;
}

/**
 * Exports
*/

export function useAuth():AuthHook {
  /** Refs **/

  const loginResolveRef = useRef<()=>void>();
  const logoutResolveRef = useRef<()=>void>();

  /** Contexts **/
  
  const { setUser } = useContext(UserContext);
  const { hasStorageRef, credentials, setCredentials } = useContext(AuthContext);
  
  /** Side-Effects **/

  useEffect(() => {
    if (credentials && loginResolveRef.current) {
      loginResolveRef.current();
      loginResolveRef.current = null;
    } else if (!credentials) {
      if (logoutResolveRef.current) {
        logoutResolveRef.current();
        logoutResolveRef.current = null;
      }
      hasStorageRef.current = false;
    }
  }, [ credentials ]);
  
  /** Helpers **/

  /**
   * @return {Promise<void>}
   */
  const login = (auth:AuthLogin, options?:AuthLoginOptions):Promise<void> => {
    return new Promise(async (resolve, reject) => {
      loginResolveRef.current = resolve.bind(this);
      hasStorageRef.current = !!options?.remember;
      
      if (hasStorageRef.current) {
        try {
          await TokenStorage.set(auth.token);
        } catch (error) {
          return reject(error);
        }
      }

      setUser(auth.user);
      setCredentials(auth.token);
    });
  };

  /**
   * @return {Promise<void>}
   */
  const logout = ():Promise<void> => {
    return new Promise(async (resolve, reject) => {
      logoutResolveRef.current = resolve.bind(this);

      if (hasStorageRef.current) {
        try {
          await TokenStorage.clear();
        } catch (error) {
          return reject(error);
        }
      }

      setUser(null);
      setCredentials(null);
    });
  };
  
  /** Output **/
  
  return {
    login, logout
  };
}
