/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

/**
 * Exports
*/

/**
 * 
 */
export function LoginAuthService(data) {
  return ApiRequest({
    data,
    method: 'POST',
    uri: '/v1/auth/login'
  });
}

/**
 * 
 */
export function RegisterAuthService(data) {
  return ApiRequest({
    data,
    method: 'POST',
    uri: '/v1/auth/register'
  });
}

/**
 * 
 */
export function RefreshAuthService({ token, tokenType }, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'POST',
    uri: '/v1/auth/refresh'
  });
}

/**
 * 
 */
export function ForgotPasswordAuthService(data) {
  return ApiRequest({
    data,
    method: 'POST',
    uri: '/v1/auth/forgot-password'
  });
}
