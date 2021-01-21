/**
 * Global Imports
*/

import { DateTime as LuxonDateTime } from 'luxon';

/**
 * Local Imports
*/

import { DateTimeConfig } from '~/config';

/**
 * Exports
*/

/**
 * Helper function wrapping luxon.DateTime() that will use a pre-defined
 * format to ensure compatiblity with the API.
 * 
 * @param {string} when
 * @param {object} options
 * 
 * @return {DateTime}
 */
export function DateTime(when, options) {
  return LuxonDateTime.fromFormat(
    when, options?.dateOnly ? DateTimeConfig.dateFormat : DateTimeConfig.dateTimeFormat
  );
}

/**
 * Namespaced Exports
*/

export const Chrono = { DateTime };
