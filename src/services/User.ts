/**
 * Local Imports
*/

import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'users';

/**
 * Exports
*/

/**
 * 
 */
export function IndexUserService(auth:Authorization, data:any):Promise<any> {
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
export function ShowUserService(auth:Authorization, user:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * 
 */
export function StoreUserService(auth:Authorization, data:any):Promise<any> {
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
export function UpdateUserService(auth:Authorization, user:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * 
 */
export function DestroyUserService(auth:Authorization, user:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}
