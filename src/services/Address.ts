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
 * 
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
 * 
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
 * 
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
 * 
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
 * 
 */
export function DestroyAddressService(auth:Authorization, address:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}
