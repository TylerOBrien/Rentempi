/**
 * Global Imports
*/

import axios from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';

/**
 * Exports
*/

/**
 * 
 * 
 * @param {object} options
 * 
 * @return {object}
 */
export function ApiRequest({ token, token_type, method, uri, data, headers }) {
  Object.assign(headers || {}, {
    Authorization: ( token && token_type && `${ token_type } ${ token }` ),
    common: Object.assign({ 'X-Requested-With': 'XMLHttpRequest' }, headers?.common)
  });

  const config = {
    headers,
    method,
    url: ApiConfig.url + uri
  };

  if (method.toLowerCase() === 'get') {
    config.params = data || {};
  } else {
    config.data = data || {};
  }

  for (const key in config.headers) {
    if (!config.headers[key]) {
      delete config.headers[key];
    }
  }

  return axios(config);
}
