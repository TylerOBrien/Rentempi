/**
 * Exports
*/

export interface TokenModel {
  ttl: number;
  ttl_type: 'week' | 'day' | 'hour' | 'minute' | 'second';
  value: string;
}
