/**
 * Local Imports
*/

import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'images';

/**
 * Exports
*/

/**
 * 
 */
export function IndexImageService(auth:Authorization, data:any):Promise<any> {
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
export function ShowImageService(auth:Authorization, image:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * 
 */
export function StoreImageService(auth:Authorization, data:any):Promise<any> {
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
export function UpdateImageService(auth:Authorization, image:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * 
 */
export function DestroyImageService(auth:Authorization, image:ResourceIdentity, data:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}
