/**
 * Global Imports
*/

import { useContext } from 'react';
import { AxiosResponse } from 'axios';

/**
 * Local Imports
*/

import * as AllServices from '~/services';
import { ApiContext } from '~/providers/ApiProvider';

/**
 * Types/Interfaces
*/

export interface ServiceHook {
  call: <Response=any>(name:string, ...args:Array<any>) => Promise<Response>;
}

/**
 * Exports
*/

export function useService():ServiceHook {
  /** Contexts **/

  const { credentials } = useContext(ApiContext);

  /** Helpers **/

  /**
   * @return {Promise<any>}
   */
  const call = <Response=any>(name:string, ...args:Array<any>):Promise<Response> => {
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
        .then((response:AxiosResponse) => resolve(response.data))
        .catch(reject);
    });
  };
  
  /** Output **/
  
  return {
    call
  };
}
