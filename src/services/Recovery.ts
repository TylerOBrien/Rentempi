/**
 * Local Imports
*/

import { RecoveryModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'recoveries';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexRecoveryRequest {
  filter?: Array<any>;
}

export interface IndexRecoveryResponse extends RecoveryModel {
  //
}

/**
 * Retrieve listing of all recoveries.
 * 
 * @param {Authorization} auth
 * @param {IndexRecoveryRequest} data
 * 
 * @return {Promise<IndexRecoveryResponse>}
 */
export function IndexRecoveryService(auth:Authorization, data?:IndexRecoveryRequest):Promise<IndexRecoveryResponse> {
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

export interface ShowRecoveryRequest {
  //
}

export interface ShowRecoveryResponse extends RecoveryModel {
  //
}

/**
 * Retrieve a recovery.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} recovery
 * @param {ShowRecoveryRequest} data
 * 
 * @return {Promise<ShowRecoveryResponse>}
 */
export function ShowRecoveryService(auth:Authorization, recovery:ResourceIdentity, data?:ShowRecoveryRequest):Promise<ShowRecoveryResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ recovery.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreRecoveryRequest {
  identity: {
    type: 'email' | 'mobile';
    value: string;
  }
}

export interface StoreRecoveryResponse extends RecoveryModel {
  //
}

/**
 * Save a recovery.
 * 
 * @param {StoreRecoveryRequest} data
 * @param {Authorization} auth
 * 
 * @return {Promise<StoreRecoveryResponse>}
 */
export function StoreRecoveryService(data:StoreRecoveryRequest, auth?:Authorization):Promise<StoreRecoveryResponse> {
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

export interface UpdateRecoveryRequest {
  //
}

export interface UpdateRecoveryResponse {
  //
}

/**
 * Update a recovery.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} recovery
 * @param {UpdateRecoveryRequest} data
 * 
 * @return {Promise<UpdateRecoveryResponse>}
 */
export function UpdateRecoveryService(auth:Authorization, recovery:ResourceIdentity, data:UpdateRecoveryRequest):Promise<UpdateRecoveryResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ recovery.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyRecoveryRequest {
  //
}

export interface DestroyRecoveryResponse {
  //
}

/**
 * Remove a recovery.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} recovery
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyRecoveryService(auth:Authorization, recovery:ResourceIdentity, data?:DestroyRecoveryRequest):Promise<DestroyRecoveryResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ recovery.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Recovery = {
  index: IndexRecoveryService,
  show: ShowRecoveryService,
  store: StoreRecoveryService,
  update: UpdateRecoveryService,
  destroy: DestroyRecoveryService
};
