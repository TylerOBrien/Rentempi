/**
 * Global Imports
*/

import axios, { AxiosRequestConfig, Method } from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';
import { TokenModel } from '~/models';

/**
 * Config
*/

const defaultAuth:Authorization = null;
const defaultHeaders = { 'X-Requested-With': 'XMLHttpRequest' };

/**
 * Interfaces
*/

export type Authorization = TokenModel;

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
    Authorization: auth?.value || defaultAuth?.value,
  });

  const config:AxiosRequestConfig = {
    headers,
    method: request.method as Method,
    url: ApiConfig.url + request.uri,
    [request.method.toLowerCase() === 'get' ? 'params' : 'data']: request.data || {}
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
