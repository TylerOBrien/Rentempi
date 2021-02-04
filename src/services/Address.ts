/**
 * Local Imports
*/

import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'addresses';

/**
 * Exports
*/

/**
 * Retrieve listing of all addresses.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function IndexAddressService(auth:Authorization, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/**
 * Retrieve an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function ShowAddressService(auth:Authorization, address:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}

/**
 * Save an address.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function StoreAddressService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/**
 * Update an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function UpdateAddressService(auth:Authorization, address:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}

/**
 * Remove an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyAddressService(auth:Authorization, address:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}
