/**
 * Global Imports
*/

import axios, { Method } from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';

/**
 * Config
*/

const defaultHeadersCommon = { 'X-Requested-With': 'XMLHttpRequest' };

/**
 * Interfaces
*/

export interface Authorization {
  token: string;
}

export interface Request {
  method: string;
  uri: string;
  data?: any;
  headers?: any;
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
  const headers = Object.assign({}, request.headers, {
    Authorization: auth?.token,
    common: Object.assign({}, defaultHeadersCommon, request.headers?.common)
  });

  const payloadKey = request.method.toLowerCase() === 'get' ? 'params' : 'data';
  const config = {
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
