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
 * 
 */
export function StoreEmailVerificationService(auth:Authorization, data:any):Promise<any> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };
  
  return Api.call(config, auth);
}
