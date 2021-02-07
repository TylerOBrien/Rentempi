/**
 * Local Imports
*/

import { UserModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'users';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexUserRequest {
  filter?: any;
}

export interface IndexUserResponse extends UserModel {
  //
}

/**
 * Retrieve listing of all users.
 * 
 * @param {Authorization} auth
 * @param {IndexUserRequest} data
 * 
 * @return {Promise<IndexUserResponse>}
 */
export function IndexUserService(auth:Authorization, data?:IndexUserRequest):Promise<IndexUserResponse> {
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

export interface ShowUserRequest {
  //
}

export interface ShowUserResponse extends UserModel {
  //
}

/**
 * Retrieve a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {ShowUserRequest} data
 * 
 * @return {Promise<ShowUserResponse>}
 */
export function ShowUserService(auth:Authorization, user:ResourceIdentity, data?:ShowUserRequest):Promise<ShowUserResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreUserRequest {
  //
}

export interface StoreUserResponse extends UserModel {
  //
}

/**
 * Save a user.
 * 
 * @param {Authorization} auth
 * @param {StoreUserRequest} data
 * 
 * @return {Promise<StoreUserResponse>}
 */
export function StoreUserService(auth:Authorization, data:StoreUserRequest):Promise<StoreUserResponse> {
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

export interface UpdateUserRequest {
  //
}

export interface UpdateUserResponse {
  //
}

/**
 * Update a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {UpdateUserRequest} data
 * 
 * @return {Promise<UpdateUserResponse>}
 */
export function UpdateUserService(auth:Authorization, user:ResourceIdentity, data:UpdateUserRequest):Promise<UpdateUserResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyUserRequest {
  //
}

export interface DestroyUserResponse {
  //
}

/**
 * Remove a user.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} user
 * @param {DestroyUserRequest} data
 * 
 * @return {Promise<DestroyUserResponse>}
 */
export function DestroyUserService(auth:Authorization, user:ResourceIdentity, data?:DestroyUserRequest):Promise<DestroyUserResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ user.id }`
  };
  
  return Api.call(config, auth);
}
