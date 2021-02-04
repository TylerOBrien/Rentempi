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
 * Retrieve listing of all images.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function IndexImageService(auth:Authorization, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/**
 * Retrieve an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function ShowImageService(auth:Authorization, image:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/**
 * Save an image.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Update an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Remove an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyImageService(auth:Authorization, image:ResourceIdentity, data?:any):Promise<any> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}
