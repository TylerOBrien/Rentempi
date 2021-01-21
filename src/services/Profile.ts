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
 * 
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
 * 
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
 * 
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
 * 
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
 * 
 */
export function DestroyProfileService(auth:Authorization, profile:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}
