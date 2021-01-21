/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

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
export function StoreEmailVerificationService({ token, tokenType }, data) {
  return ApiRequest({
    token,
    tokenType,
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  });
}
