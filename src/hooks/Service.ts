/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import * as AllServices from '~/services';

import { ApiContext } from '~/providers/ApiProvider';

/**
 * Types/Interfaces
*/

export interface ServiceHook {
  call: (name:string) => Promise<any>;
}

/**
 * Exports
*/

export function useService():ServiceHook {
  /** Contexts **/

  const { credentials } = useContext(ApiContext);

  /** Helpers **/

  /**
   * 
   */
  const call = (name:string, ...args:any[]):Promise<any> => {
    const [ action, group, ...rest ] = name.split('.');

    const groupName = `${ group }Services`;
    const serviceName = `${ action }${ group }${ rest.join('') }Service`;
    
    if (!(groupName in AllServices)) {
      //
    } else if (!(serviceName in AllServices[groupName])) {
      //
    }

    const services = AllServices[groupName];
    const service = services[serviceName];

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