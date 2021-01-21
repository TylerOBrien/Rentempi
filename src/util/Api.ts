/**
 * Global Imports
*/

import axios from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';

/**
 * Locals
*/

const defaultHeadersCommon = { 'X-Requested-With': 'XMLHttpRequest' };

/**
 * Exports
*/

/**
 * 
 * 
 * @param {object} options
 * 
 * @return {Promise}
 */
export function ApiRequest({ token, tokenType, method, uri, data, headers }):Promise<any> {
  headers = Object.assign({}, headers, {
    Authorization: ( token && tokenType && `${ tokenType } ${ token }` ),
    common: Object.assign({}, defaultHeadersCommon, headers?.common)
  });

  const payloadKey = method.toLowerCase() === 'get' ? 'params' : 'data';
  const config = {
    headers,
    method,
    url: ApiConfig.url + uri,
    [payloadKey]: data || {}
  };

  for (const key in config.headers) {
    if (!config.headers[key]) {
      delete config.headers[key];
    }
  }

  return axios(config);
}
