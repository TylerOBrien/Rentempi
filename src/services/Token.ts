/**
 * Local Imports
*/

import { TokenModel, UserModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'tokens';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexTokenRequest {
  filter?: Array<any>;
}

export interface IndexTokenResponse extends TokenModel {
  //
}

/**
 * Retrieve listing of all tokens.
 * 
 * @param {Authorization} auth
 * @param {IndexTokenRequest} data
 * 
 * @return {Promise<IndexTokenResponse>}
 */
export function IndexTokenService(auth:Authorization, data?:IndexTokenRequest):Promise<IndexTokenResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

export interface ShowTokenRequest {
  //
}

export interface ShowTokenResponse extends TokenModel {
  //
}

/**
 * Retrieve a token.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Token
 * @param {ShowTokenRequest} data
 * 
 * @return {Promise<ShowTokenResponse>}
 */
export function ShowTokenService(auth:Authorization, Token:ResourceIdentity, data?:ShowTokenRequest):Promise<ShowTokenResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ Token.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreTokenRequest {
  identity: {
    type: 'email' | 'mobile' | 'oauth';
    value: string;
  },
  secret: {
    type: 'password' | 'totp';
    value: string;
  }
}

export interface StoreTokenResponse {
  token: TokenModel;
  user: UserModel;
}

/**
 * Save a token.
 * 
 * @param {StoreTokenRequest} data
 * 
 * @return {Promise<StoreTokenResponse>}
 */
export function StoreTokenService(data:StoreTokenRequest):Promise<StoreTokenResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

export interface UpdateTokenRequest {
  //
}

export interface UpdateTokenResponse {
  //
}

/**
 * Update a token.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Token
 * @param {UpdateTokenRequest} data
 * 
 * @return {Promise<UpdateTokenResponse>}
 */
export function UpdateTokenService(auth:Authorization, Token:ResourceIdentity, data:UpdateTokenRequest):Promise<UpdateTokenResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ Token.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyTokenRequest {
  //
}

export interface DestroyTokenResponse {
  //
}

/**
 * Remove a token.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Token
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyTokenService(auth:Authorization, Token:ResourceIdentity, data?:DestroyTokenRequest):Promise<DestroyTokenResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ Token.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Token = {
  index: IndexTokenService,
  show: ShowTokenService,
  store: StoreTokenService,
  update: UpdateTokenService,
  destroy: DestroyTokenService
};