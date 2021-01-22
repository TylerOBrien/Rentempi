/**
 * Local Imports
*/

import { countries } from '~/lib/node-countries';

/**
 * Sibling Imports
*/

import { Assert } from './Assert'
import { JS } from './JS';

/**
 * Types/Interfaces
*/

export type GeoNameType = 'name' | 'alpha2' | 'alpha3';

/**
 * Local Vars
*/

const ncountries = countries.length;

/**
 * Exports
*/

/**
 * 
 * @param {GeoNameType} needle
 * @param {string} key
 * 
 * @return {string}
 */
function country(needle:GeoNameType, key:string):string {
  if (!key) {
    Assert.ThrowUnexpectedEmptyError('key', 'string');
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
function province(country, needle:string, provinceKey:string='short', countryKey:GeoNameType='alpha2'):string {
  if (!country) {
    Assert.ThrowUnexpectedEmptyError('country', 'string');
  }

  if (!needle) {
    Assert.ThrowUnexpectedEmptyError('needle', 'string');
  }

  if (!provinceKey) {
    Assert.ThrowUnexpectedEmptyError('provinceKey', 'string');
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
function countryFromAlpha2(alpha2:string):string {
  if (!alpha2) {
    Assert.ThrowUnexpectedEmptyError('alpha2', 'string');
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
function countryFromAlpha3(alpha3:string):string {
  if (!alpha3) {
    Assert.ThrowUnexpectedEmptyError('alpha3', 'string');
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
export function countryFromName(name:string):string {
  if (!name) {
    Assert.ThrowUnexpectedEmptyError('name', 'string');
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
