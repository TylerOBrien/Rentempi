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
 * Retrieve listing of all users.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function IndexUserService(auth:Authorization, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  };
  
  return Api.call(config, auth);
}

/**
 * Retrieve a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function ShowUserService(auth:Authorization, user:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * Save a user.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Update a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Remove a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyUserService(auth:Authorization, user:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}
