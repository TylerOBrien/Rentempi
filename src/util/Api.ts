/**
 * Global Imports
*/

import axios, { AxiosRequestConfig, Method } from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';

/**
 * Config
*/

const defaultHeaders = { 'X-Requested-With': 'XMLHttpRequest' };

/**
 * Interfaces
*/

export interface Authorization {
  token: string;
}

export interface Headers {
  common?: any;
}

export interface Request {
  method: string;
  uri: string;
  data?: object;
  headers?: object;
}

export interface ResourceIdentity {
  id: number | string;
}

/**
 * Locals
*/

/**
 * Wrapper around axios. Will call API with given request parameters.
 * 
 * @param {Request} request
 * @param {Authorization} auth
 * 
 * @return {Promise}
 */
function call<Response=any>(request:Request, auth?:Authorization):Promise<Response> {
  const headers:object = Object.assign({}, request.headers, defaultHeaders, {
    Authorization: auth?.token,
  });

  const payloadKey:string = request.method.toLowerCase() === 'get' ? 'params' : 'data';
  const config:AxiosRequestConfig = {
    headers,
    method: <Method>request.method,
    url: ApiConfig.url + request.uri,
    [payloadKey]: request.data || {}
  };

  for (const key in config.headers) {
    if (!config.headers[key]) {
      delete config.headers[key];
    }
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => resolve(response.data))
      .catch(reject);
  });
}

/**
 * Namespaced Exports
*/

export const Api = { call };
