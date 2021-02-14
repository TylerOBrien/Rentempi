/**
 * Exports
*/

export interface IdentityModel {
  id: number;
  user_id?: number;
  name: string;
  type: 'email' | 'mobile' | 'oauth';
  value: string;
  verified_at?: string;
}
