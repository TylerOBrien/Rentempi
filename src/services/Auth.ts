/**
 * Local Imports
*/

import { Api, Authorization } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'auth';

/**
 * Exports
*/

/**
 * 
 */
export function LoginAuthService(data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/login`
  };

  return Api.call(config);
}

/**
 * 
 */
export function RegisterAuthService(data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/register`
  };

  return Api.call(config);
}

/**
 * 
 */
export function RefreshAuthService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/refresh`
  };

  return Api.call(config, auth);
}

/**
 * 
 */
export function ForgotPasswordAuthService(data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/forgot-password`
  };

  return Api.call(config);
}
