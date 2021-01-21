/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import * as Services from '~/services';

import { ApiContext } from '~/providers/ApiProvider';

/**
 * Exports
*/

/**
 * 
 */
export function useService() {
  /** Contexts **/

  const { credentials } = useContext(ApiContext);

  /** Helpers **/

  /**
   * 
   */
  const call = (name, ...args) => {
    const [ action, group, ...rest ] = name.split('.');

    const groupName = `${ group }Services`;
    const serviceName = `${ action }${ group }${ rest.join('') }Service`;
    
    if (!(groupName in Services)) {
      //
    } else if (!(serviceName in Services[groupName])) {
      //
    }

    const group = Services[groupName];
    const service = group[serviceName];

    return new Promise((resolve, reject) => {
      service(credentials, ...args)
        .then(response => resolve(response.data))
        .catch(reject);
    });
  };
  
  /** Output **/
  
  return {
    call
  };
}