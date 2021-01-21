/**
 * Global Imports
*/

import { JSON as countries } from 'node-countries';

/**
 * Sibling Imports
*/

import { ThrowUnexpectedEmpty, ThrowUnexpectedTypeError } from './Error'
import { JS } from './JS';

/**
 * Local Vars
*/

const ncountries = countries.length;

/**
 * Exports
*/

/**
 * 
 * @param {string} needle
 * @param {string} key
 * 
 * @return {string}
 */
export function country(needle, key) {
  if (!JS.isString(needle)) {
    ThrowUnexpectedTypeError('needle', 'string', typeof needle);
  }
  
  if (!JS.isString(key)) {
    ThrowUnexpectedTypeError('key', 'string', typeof key);
  }

  if (!needle) {
    ThrowUnexpectedEmpty('needle', 'string');
  }

  if (!key) {
    ThrowUnexpectedEmpty('key', 'string');
  }

  for (let i = 0; i < ncountries; i++) {
    if (JS.isArray(countries[i][key])) {
      if (countries[i][key].indexOf(needle) !== -1) {
        return countries[i];
      }
    } else if (countries[i][key] === needle) {
      return countries[i];
    }
  }

  throw new Error;
}

/**
 * 
 * @param {object|string} country
 * @param {string} needle
 * @param {string} key
 * 
 * @return {string}
 */
export function province(country, needle, provinceKey='short', countryKey='alpha2') {
  if (!JS.isObject(country) && !JS.isString(country)) {
    ThrowUnexpectedTypeError('country', 'object|string', typeof country);
  }

  if (!JS.isString(needle)) {
    ThrowUnexpectedTypeError('needle', 'string', typeof needle);
  }
  
  if (!JS.isString(provinceKey)) {
    ThrowUnexpectedTypeError('provinceKey', 'string', typeof provinceKey);
  }

  if (!country) {
    ThrowUnexpectedEmpty('country', 'string');
  }

  if (!needle) {
    ThrowUnexpectedEmpty('needle', 'string');
  }

  if (!provinceKey) {
    ThrowUnexpectedEmpty('provinceKey', 'string');
  }

  if (JS.isString(country)) {
    country = country(country, countryKey);
  }

  let i = country.provinces.length;

  while (i--) {
    if (JS.isArray(country.provinces[i][key])) {
      if (country.provinces[i][key].indexOf(needle) !== -1) {
        return country.provinces[i];
      }
    } else if (country.provinces[i][key] === needle) {
      return country.provinces[i];
    }
  }

  throw new Error;
}

/**
 * 
 * @param {string} alpha2
 * 
 * @return {string}
 */
export function countryFromAlpha2(alpha2) {
  if (!JS.isString(alpha2)) {
    ThrowUnexpectedTypeError('alpha2', 'string', typeof alpha2);
  }

  if (!alpha2) {
    ThrowUnexpectedEmpty('alpha2', 'string');
  }

  if (alpha2.length !== 2) {
    throw new Error;
  }

  return country('alpha2', alpha2);
}

/**
 * 
 * @param {string} alpha3
 * 
 * @return {string}
 */
export function countryFromAlpha3(alpha3) {
  if (!JS.isString(alpha3)) {
    ThrowUnexpectedTypeError('alpha3', 'string', typeof alpha3);
  }

  if (!alpha3) {
    ThrowUnexpectedEmpty('alpha3', 'string');
  }

  if (alpha3.length !== 3) {
    throw new Error;
  }

  return country('alpha3', alpha3);
}

/**
 * 
 * @param {string} name
 * 
 * @return {string}
 */
export function countryFromName(name) {
  if (!JS.isString(name)) {
    ThrowUnexpectedTypeError('name', 'string', typeof name);
  }

  if (!name) {
    ThrowUnexpectedEmpty('name', 'string');
  }

  if (name.length < 4) {
    throw new Error;
  }

  return country('name', name);
}

/**
 * Namespaced Exports
*/

export const Geo = {
  country,
  countryFromAlpha2,
  countryFromAlpha3,
  countryFromName,
  province
};
