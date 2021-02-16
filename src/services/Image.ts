/**
 * Local Imports
*/

import { ImageModel } from '~/models';
import { Api, Authorization, ResourceIdentity } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'images';

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

export interface IndexImageRequest {
  filter?: Array<any>;
}

export interface IndexImageResponse extends ImageModel {
  //
}

/**
 * Retrieve listing of all images.
 * 
 * @param {Authorization} auth
 * @param {IndexImageRequest} data
 * 
 * @return {Promise<IndexImageResponse>}
 */
export function IndexImageService(auth:Authorization, data?:IndexImageRequest):Promise<IndexImageResponse> {
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

export interface ShowImageRequest {
  //
}

export interface ShowImageResponse extends ImageModel {
  //
}

/**
 * Retrieve an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {ShowImageRequest} data
 * 
 * @return {Promise<ShowImageResponse>}
 */
export function ShowImageService(auth:Authorization, image:ResourceIdentity, data?:ShowImageRequest):Promise<ShowImageResponse> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreImageRequest {
  //
}

export interface StoreImageResponse extends ImageModel {
  //
}

/**
 * Save an image.
 * 
 * @param {Authorization} auth
 * @param {StoreImageRequest} data
 * 
 * @return {Promise<StoreImageResponse>}
 */
export function StoreImageService(auth:Authorization, data:StoreImageRequest):Promise<StoreImageResponse> {
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

export interface UpdateImageRequest {
  //
}

export interface UpdateImageResponse {
  //
}

/**
 * Update an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {UpdateImageRequest} data
 * 
 * @return {Promise<UpdateImageResponse>}
 */
export function UpdateImageService(auth:Authorization, image:ResourceIdentity, data:UpdateImageRequest):Promise<UpdateImageResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

export interface DestroyImageRequest {
  //
}

export interface DestroyImageResponse {
  //
}

/**
 * Remove an image.
 * 
 * @param {Authorization} auth
 * @param {ResourceIdentity} image
 * @param {DestroyImageRequest} data
 * 
 * @return {Promise<DestroyImageResponse>}
 */
export function DestroyImageService(auth:Authorization, image:ResourceIdentity, data?:DestroyImageRequest):Promise<DestroyImageResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ image.id }`
  };
  
  return Api.call(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Image = {
  index: IndexImageService,
  show: ShowImageService,
  store: StoreImageService,
  update: UpdateImageService,
  destroy: DestroyImageService
};

