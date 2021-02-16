/**
 * Local Imports
*/

import { IdentityModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'identities';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexIdentityRequest {
  filter?: Array<any>;
}

export interface IndexIdentityResponse extends IdentityModel {
  //
}

/**
 * Retrieve listing of all Identitys.
 * 
 * @param {Authorization} auth
 * @param {IndexIdentityRequest} data
 * 
 * @return {Promise<IndexIdentityResponse>}
 */
export function IndexIdentityService(auth:Authorization, data?:IndexIdentityRequest):Promise<IndexIdentityResponse> {
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

export interface ShowIdentityRequest {
  //
}

export interface ShowIdentityResponse extends IdentityModel {
  //
}

/**
 * Retrieve a Identity.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Identity
 * @param {ShowIdentityRequest} data
 * 
 * @return {Promise<ShowIdentityResponse>}
 */
export function ShowIdentityService(auth:Authorization, Identity:ResourceIdentity, data?:ShowIdentityRequest):Promise<ShowIdentityResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ Identity.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreIdentityRequest {
  user_id?: number;
  name: string;
  type: 'email' | 'mobile' | 'oauth';
  value: string;
}

export interface StoreIdentityResponse extends IdentityModel {
  //
}

/**
 * Save a Identity.
 * 
 * @param {StoreIdentityRequest} data
 * @param {Authorization} auth
 * 
 * @return {Promise<StoreIdentityResponse>}
 */
export function StoreIdentityService(data:StoreIdentityRequest, auth?:Authorization):Promise<StoreIdentityResponse> {
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

export interface UpdateIdentityRequest {
  //
}

export interface UpdateIdentityResponse {
  //
}

/**
 * Update a Identity.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Identity
 * @param {UpdateIdentityRequest} data
 * 
 * @return {Promise<UpdateIdentityResponse>}
 */
export function UpdateIdentityService(auth:Authorization, Identity:ResourceIdentity, data:UpdateIdentityRequest):Promise<UpdateIdentityResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ Identity.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyIdentityRequest {
  //
}

export interface DestroyIdentityResponse {
  //
}

/**
 * Remove a Identity.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} Identity
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyIdentityService(auth:Authorization, Identity:ResourceIdentity, data?:DestroyIdentityRequest):Promise<DestroyIdentityResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ Identity.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Identity = {
  index: IndexIdentityService,
  show: ShowIdentityService,
  store: StoreIdentityService,
  update: UpdateIdentityService,
  destroy: DestroyIdentityService
};
