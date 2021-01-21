/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

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
export function IndexImageService({ token, tokenType }, data) {
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
export function ShowImageService({ token, tokenType }, image, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ image.id }`
  });
}

/**
 * 
 */
export function StoreImageService({ token, tokenType }, data) {
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
export function UpdateImageService({ token, tokenType }, image, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ image.id }`
  });
}

/**
 * 
 */
export function DestroyImageService({ token, tokenType }, image, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ image.id }`
  });
}
