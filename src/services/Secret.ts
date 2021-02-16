/**
 * Local Imports
*/

import { SecretModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'secrets';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexSecretRequest {
  filter?: Array<any>;
}

export interface IndexSecretResponse extends SecretModel {
  //
}

/**
 * Retrieve listing of all secrets.
 * 
 * @param {Authorization} auth
 * @param {IndexSecretRequest} data
 * 
 * @return {Promise<IndexSecretResponse>}
 */
export function IndexSecretService(auth:Authorization, data?:IndexSecretRequest):Promise<IndexSecretResponse> {
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

export interface ShowSecretRequest {
  //
}

export interface ShowSecretResponse extends SecretModel {
  //
}

/**
 * Retrieve a secret.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} secret
 * @param {ShowSecretRequest} data
 * 
 * @return {Promise<ShowSecretResponse>}
 */
export function ShowSecretService(auth:Authorization, secret:ResourceIdentity, data?:ShowSecretRequest):Promise<ShowSecretResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ secret.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreSecretRequest {
  user_id?: number;
  type: 'password' | 'totp';
  value: string;
  confirmation: string;
}

export interface StoreSecretResponse extends SecretModel {
  //
}

/**
 * Save a secret.
 * 
 * @param {StoreSecretRequest} data
 * @param {Authorization} auth
 * 
 * @return {Promise<StoreSecretResponse>}
 */
export function StoreSecretService(data:StoreSecretRequest, auth?:Authorization):Promise<StoreSecretResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

export interface UpdateSecretRequest {
  //
}

export interface UpdateSecretResponse {
  //
}

/**
 * Update a secret.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} secret
 * @param {UpdateSecretRequest} data
 * 
 * @return {Promise<UpdateSecretResponse>}
 */
export function UpdateSecretService(auth:Authorization, secret:ResourceIdentity, data:UpdateSecretRequest):Promise<UpdateSecretResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ secret.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroySecretRequest {
  //
}

export interface DestroySecretResponse {
  //
}

/**
 * Remove a secret.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} secret
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroySecretService(auth:Authorization, secret:ResourceIdentity, data?:DestroySecretRequest):Promise<DestroySecretResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ secret.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Secret = {
  index: IndexSecretService,
  show: ShowSecretService,
  store: StoreSecretService,
  update: UpdateSecretService,
  destroy: DestroySecretService
};
