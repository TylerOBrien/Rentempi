/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

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
export function IndexProfileService({ token, tokenType }, data) {
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
export function ShowProfileService({ token, tokenType }, profile, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ profile.id }`
  });
}

/**
 * 
 */
export function StoreProfileService({ token, tokenType }, data) {
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
export function UpdateProfileService({ token, tokenType }, profile, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ profile.id }`
  });
}

/**
 * 
 */
export function DestroyProfileService({ token, tokenType }, profile, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ profile.id }`
  });
}
