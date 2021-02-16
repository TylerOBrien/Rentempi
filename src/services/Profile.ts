/**
 * Local Imports
*/

import { ProfileModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'profiles';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexProfileRequest {
  filter?: any;
}

export interface IndexProfileResponse extends ProfileModel {
  //
}

/**
 * Retrieve listing of all profiles.
 * 
 * @param {Authorization} auth
 * @param {IndexProfileRequest} data
 * 
 * @return {Promise<IndexProfileResponse>}
 */
export function IndexProfileService(auth:Authorization, data?:IndexProfileRequest):Promise<IndexProfileResponse> {
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

export interface ShowProfileRequest {
  //
}

export interface ShowProfileResponse extends ProfileModel {
  //
}

/**
 * Retrieve a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {ShowProfileRequest} data
 * 
 * @return {Promise<ShowProfileResponse>}
 */
export function ShowProfileService(auth:Authorization, profile:ResourceIdentity, data?:ShowProfileRequest):Promise<ShowProfileResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreProfileRequest {
  //
}

export interface StoreProfileResponse extends ProfileModel {
  //
}

/**
 * Save a profile.
 * 
 * @param {Authorization} auth
 * @param {StoreProfileRequest} data
 * 
 * @return {Promise<StoreProfileResponse>}
 */
export function StoreProfileService(auth:Authorization, data:StoreProfileRequest):Promise<StoreProfileResponse> {
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

export interface UpdateProfileRequest {
  //
}

export interface UpdateProfileResponse {
  //
}

/**
 * Update a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {UpdateProfileRequest} data
 * 
 * @return {Promise<UpdateProfileResponse>}
 */
export function UpdateProfileService(auth:Authorization, profile:ResourceIdentity, data:UpdateProfileRequest):Promise<UpdateProfileResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyProfileRequest {
  //
}

export interface DestroyProfileResponse {
  //
}

/**
 * Remove a profile.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} profile
 * @param {DestroyProfileRequest} data
 * 
 * @return {Promise<DestroyProfileResponse>}
 */
export function DestroyProfileService(auth:Authorization, profile:ResourceIdentity, data?:DestroyProfileRequest):Promise<DestroyProfileResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ profile.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Profile = {
  index: IndexProfileService,
  show: ShowProfileService,
  store: StoreProfileService,
  update: UpdateProfileService,
  destroy: DestroyProfileService
};
