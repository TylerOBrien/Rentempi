/**
 * Local Imports
*/

import { Api, Authorization } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'email-verifications';

/**
 * Exports
*/

/**
 * Save email verification.
 * 
 * @param {Authorization} auth
 * @param {any} data
 * 
 * @return {Promise<any>}
 */
export function StoreEmailVerificationService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };
  
  return Api.call(config, auth);
}
