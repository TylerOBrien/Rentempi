/**
 * Global Imports
*/

import { DateTime } from 'luxon';

/**
 * Local Imports
*/

import { DateTimeConfig } from '~/config';

/**
 * Interfaces
*/

export interface DateTimeOptions {
  dateOnly: boolean
}

/**
 * Locals
*/

/**
 * Helper function wrapping luxon.DateTime() that will use a pre-defined
 * format to ensure compatiblity with the API.
 * 
 * @param {string} when
 * @param {DateTimeOptions} options
 * 
 * @return {DateTime}
 */
function from(when:string, options?:DateTimeOptions):DateTime {
  return DateTime.fromFormat(
    when, options?.dateOnly ? DateTimeConfig.format.date : DateTimeConfig.format.dateTime
  );
}

/**
 * Namespaced Exports
*/

export const Chrono = { from };
