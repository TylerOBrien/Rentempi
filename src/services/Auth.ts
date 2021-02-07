/**
 * Local Imports
*/

import { TokenModel, UserModel } from '~/models';
import { Api, Authorization } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'auth';

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
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

LoginAuthService.unprotected = true;

/*
|--------------------------------------------------------------------------
| Register
|--------------------------------------------------------------------------
*/

export interface RegisterAuthRequest {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterAuthResponse {
  user: UserModel;
  token: TokenModel;
}

/**
 * Attempt registration.
 * 
 * @param {RegisterAuthRequest} data
 * 
 * @return {Promise<RegisterAuthResponse>}
 */
export function RegisterAuthService(data:RegisterAuthRequest):Promise<RegisterAuthResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/register`
  };

  return Api.call(config);
}

RegisterAuthService.unprotected = true;

/*
|--------------------------------------------------------------------------
| Refresh
|--------------------------------------------------------------------------
*/

export interface RefreshAuthRequest {
  
}

export interface RefreshAuthResponse {
  token: TokenModel;
}

/**
 * Attempt to refresh token.
 * 
 * @param {Authorization} auth
 * @param {RefreshAuthRequest} data
 * 
 * @return {Promise<RefreshAuthResponse>}
 */
export function RefreshAuthService(auth:Authorization, data:RefreshAuthRequest):Promise<RefreshAuthResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/refresh`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Forgot Password
|--------------------------------------------------------------------------
*/

export interface ForgotPasswordAuthRequest {
  email: string;
}

export interface ForgotPasswordAuthResponse {
  
}

/**
 * Initiate forgot password process.
 * 
 * @param {ForgotPasswordAuthRequest} data
 * 
 * @return {Promise<ForgotPasswordAuthResponse>}
 */
export function ForgotPasswordAuthService(data:ForgotPasswordAuthRequest):Promise<ForgotPasswordAuthResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/forgot-password`
  };

  return Api.call(config);
}

ForgotPasswordAuthService.unprotected = true;
