/**
 * Exports
*/

export interface SecretModel {
  id: number;
  identity_id: number;
  type: 'password' | 'totp';
}
