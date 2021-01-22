/**
 * Global Imports
*/

import { useContext, useEffect, useRef } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/AuthProvider';
import { UserContext } from '~/providers/UserProvider';

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
  options?:AuthLoginOptions;
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
    } else if (!token && logoutResolveRef.current) {
      logoutResolveRef.current();
      logoutResolveRef.current = null;
    }
  }, [ token ]);
  
  /** Helpers **/

  /**
   * @return {Promise<any>}
   */
  const login = (auth:AuthLogin):Promise<any> => {
    return new Promise((resolve, reject) => {
      loginResolveRef.current = resolve.bind(this);
      
      if (auth.options?.remember) {
        TokenStorage.set(token);
      }

      setUser(auth.user);
      setToken(auth.token);
    });
  };

  /**
   * @return {Promise<any>}
   */
  const logout = ():Promise<any> => {
    return new Promise(async (resolve, reject) => {
      logoutResolveRef.current = resolve.bind(this);

      try {
        await TokenStorage.clear();
      } catch (error) {
        return reject(error);
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
