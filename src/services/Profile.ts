/**
 * Local Imports
*/

import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'profiles';

/**
 * Exports
*/

/**
 * Retrieve listing of all profiles.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function IndexProfileService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/**
 * Retrieve a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function ShowProfileService(auth:Authorization, profile:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}

/**
 * Save a profile.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function StoreProfileService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/**
 * Update a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function UpdateProfileService(auth:Authorization, profile:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}

/**
 * Remove a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyProfileService(auth:Authorization, profile:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}
