/**
 * Exports
*/

export interface UserModel {
  id: number;
  account_id: number;
  is_identified: boolean;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  last_active_at: string;
}
