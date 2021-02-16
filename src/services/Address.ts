/**
 * Local Imports
*/

import { AddressModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'addresses';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexAddressRequest {
  filter?: Array<any>;
}

export interface IndexAddressResponse extends AddressModel {
  //
}

/**
 * Retrieve listing of all addresses.
 * 
 * @param {Authorization} auth
 * @param {IndexAddressRequest} data
 * 
 * @return {Promise<IndexAddressResponse>}
 */
export function IndexAddressService(auth:Authorization, data?:IndexAddressRequest):Promise<IndexAddressResponse> {
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

export interface ShowAddressRequest {
  //
}

export interface ShowAddressResponse extends AddressModel {
  //
}

/**
 * Retrieve an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {ShowAddressRequest} data
 * 
 * @return {Promise<ShowAddressResponse>}
 */
export function ShowAddressService(auth:Authorization, address:ResourceIdentity, data?:ShowAddressRequest):Promise<ShowAddressResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreAddressRequest {
  //
}

export interface StoreAddressResponse extends AddressModel {
  //
}

/**
 * Save an address.
 * 
 * @param {Authorization} auth
 * @param {StoreAddressRequest} data
 * 
 * @return {Promise<StoreAddressResponse>}
 */
export function StoreAddressService(auth:Authorization, data:StoreAddressRequest):Promise<StoreAddressResponse> {
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

export interface UpdateAddressRequest {
  //
}

export interface UpdateAddressResponse {
  //
}

/**
 * Update an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {UpdateAddressRequest} data
 * 
 * @return {Promise<UpdateAddressResponse>}
 */
export function UpdateAddressService(auth:Authorization, address:ResourceIdentity, data:UpdateAddressRequest):Promise<UpdateAddressResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyAddressRequest {
  //
}

export interface DestroyAddressResponse {
  //
}

/**
 * Remove an address.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} address
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function DestroyAddressService(auth:Authorization, address:ResourceIdentity, data?:DestroyAddressRequest):Promise<DestroyAddressResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ address.id }`
  };

  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Address = {
  index: IndexAddressService,
  show: ShowAddressService,
  store: StoreAddressService,
  update: UpdateAddressService,
  destroy: DestroyAddressService
};
