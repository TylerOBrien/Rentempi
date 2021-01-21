/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/AuthProvider';
import { UserContext } from '~/providers/UserProvider';

/**
 * Exports
*/

export function useAuth() {
  /** Contexts **/
  
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  
  /** Helpers **/

  /**
   * 
   * 
   * @return {Promise}
   */
  const login = ({ user, token, remember }) => {
    return new Promise((resolve, reject) => {
      const waiting = [
        setUser(user),
        setToken(token)
      ];

      if (remember) {
        waiting.push(
          TokenStorage.set(token)
        );
      }

      Promise.all(waiting)
        .then(resolve)
        .catch(reject);
    });
  };

  /**
   * 
   * 
   * @return {Promise}
   */
  const logout = () => {
    return new Promise((resolve, reject) => {
      const waiting = [
        setUser(user),
        setToken(token),
        TokenStorage.clear()
      ];

      Promise.all(waiting)
        .then(resolve)
        .catch(reject);
    });
  };
  
  /** Output **/
  
  return {
    login, logout
  };
}
