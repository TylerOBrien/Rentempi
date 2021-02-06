/**
 * Local Imports
*/

import { TokenModel, UserModel } from '~/models';
import { Api, Authorization } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'auth';

/**
 * Login
*/

export interface LoginAuthRequest {
  email: string;
  password: string;
}

export interface LoginAuthResponse {
  user: UserModel;
  token: TokenModel;
}

/**
 * Attempt login.
 * 
 * @param {LoginAuthRequest} data
 * 
 * @return {Promise<LoginAuthResponse>}
 */
export function LoginAuthService(data:LoginAuthRequest):Promise<LoginAuthResponse> {
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

/**
 * Attempt registration.
 * 
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Attempt to refresh token.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
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
 * Initiate forgot password process.
 * 
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function ForgotPasswordAuthService(data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/forgot-password`
  };

  return Api.call(config);
}
