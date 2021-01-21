/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

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
export function IndexUserService({ token, tokenType }, data) {
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
export function ShowUserService({ token, tokenType }, user, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ user.id }`
  });
}

/**
 * 
 */
export function StoreUserService({ token, tokenType }, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'POST',
    uri: `/v1/${ user.endpoint }`
  });
}

/**
 * 
 */
export function UpdateUserService({ token, tokenType }, user, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ user.id }`
  });
}

/**
 * 
 */
export function DestroyUserService({ token, tokenType }, user, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ user.id }`
  });
}
