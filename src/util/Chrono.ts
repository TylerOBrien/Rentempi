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

export interface DateTimeFormat {
  date?: string;
  time?: string;
  dateTime?: string;
};

export interface DateTimeOptions {
  dateOnly: boolean;
  format?: DateTimeFormat;
};

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
  return DateTime.fromFormat(when,
    options?.dateOnly
      ? ( options?.format?.date || DateTimeConfig.format.date )
      : ( options?.format?.dateTime || DateTimeConfig.format.dateTime )
  );
}

/**
 * Namespaced Exports
*/

export const Chrono = { from };
