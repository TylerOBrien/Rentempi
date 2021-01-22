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
  remember?:boolean;
}

export interface AuthLogin {
  user:any;
  token:Authorization;
}

export interface AuthHook {
  login(auth:AuthLogin):Promise<any>;
  logout():Promise<any>;
}

/**
 * Exports
*/

export function useAuth():AuthHook {
  /** Refs **/

  const hasStoredTokenRef = useRef<boolean>();
  const loginResolveRef = useRef<()=>void>();
  const logoutResolveRef = useRef<()=>void>();

  /** Contexts **/
  
  const { setUser } = useContext(UserContext);
  const { token, setToken } = useContext(AuthContext);
  
  /** Side-Effects **/

  useEffect(() => {
    if (token && loginResolveRef.current) {
      loginResolveRef.current();
      loginResolveRef.current = null;
    } else if (!token) {
      if (logoutResolveRef.current) {
        logoutResolveRef.current();
        logoutResolveRef.current = null;
      }
      hasStoredTokenRef.current = false;
    }
  }, [ token ]);
  
  /** Helpers **/

  /**
   * @return {Promise<void>}
   */
  const login = (auth:AuthLogin, options?:AuthLoginOptions):Promise<void> => {
    return new Promise((resolve, reject) => {
      loginResolveRef.current = resolve.bind(this);
      hasStoredTokenRef.current = !!options?.remember;
      
      if (hasStoredTokenRef.current) {
        TokenStorage.set(token);
      }

      setUser(auth.user);
      setToken(auth.token);
    });
  };

  /**
   * @return {Promise<void>}
   */
  const logout = ():Promise<void> => {
    return new Promise(async (resolve, reject) => {
      logoutResolveRef.current = resolve.bind(this);

      if (hasStoredTokenRef.current) {
        try {
          await TokenStorage.clear();
        } catch (error) {
          return reject(error);
        }
      }

      setUser(null);
      setToken(null);
    });
  };
  
  /** Output **/
  
  return {
    login, logout
  };
}
