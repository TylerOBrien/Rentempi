/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'addresses';

/**
 * Exports
*/

/**
 * 
 */
export function IndexAddressService({ token, tokenType }, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  });
}

/**
 * 
 */
export function ShowAddressService({ token, tokenType }, address, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ address.id }`
  });
}

/**
 * 
 */
export function StoreAddressService({ token, tokenType }, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  });
}

/**
 * 
 */
export function UpdateAddressService({ token, tokenType }, address, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ address.id }`
  });
}

/**
 * 
 */
export function DestroyAddressService({ token, tokenType }, address, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ address.id }`
  });
}
