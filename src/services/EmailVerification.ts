/**
 * Local Imports
*/

import { Api, Authorization } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'email-verifications';

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreEmailVerificationRequest {
  email: string;
  code: string;
}

export interface StoreEmailVerificationResponse {
  
}

/**
 * Save email verification.
 * 
 * @param {Authorization} auth
 * @param {StoreEmailVerificationRequest} data
 * 
 * @return {Promise<StoreEmailVerificationResponse>}
 */
export function StoreEmailVerificationService(auth:Authorization, data:StoreEmailVerificationRequest):Promise<StoreEmailVerificationResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };
  
  return Api.call(config, auth);
}
