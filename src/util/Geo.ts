/**
 * Local Imports
*/

import countries from 'node-countries/data/countries.json';

/**
 * Sibling Imports
*/

import { Assert } from './Assert'
import { JS } from './JS';

/**
 * Types/Interfaces
*/

export type GeoNameType = 'name' | 'alpha2' | 'alpha3';

export interface Province {
  short: string;
  name: string;
  alias: string;
}

export interface Country {
  alpha2: string | Array<string>;
  alpha3: string | Array<string>;
  provinces: Array<Province>;
}

/**
 * Local Vars
*/

const ncountries = countries.length;

/**
 * Exports
*/

/**
 * Retreive country data.
 * 
 * @param {GeoNameType} needle
 * @param {string} key
 * 
 * @return {Country}
 */
function country(needle:GeoNameType, key:string):Country {
  if (!key) {
    Assert.ThrowUnexpectedEmptyError('key', 'string');
  }

  for (let i = 0; i < ncountries; i++) {
    if (JS.isArray(countries[i][key])) {
      if (countries[i][key].indexOf(needle) !== -1) {
        return countries[i] as unknown as Country;
      }
    } else if (countries[i][key] === needle) {
      return countries[i] as unknown as Country;
    }
  }

  throw new Error;
}

/**
 * Retreive province data.
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
    if (JS.isArray(country.provinces[i][provinceKey])) {
      if (country.provinces[i][provinceKey].indexOf(needle) !== -1) {
        return country.provinces[i];
      }
    } else if (country.provinces[i][provinceKey] === needle) {
      return country.provinces[i];
    }
  }

  throw new Error;
}

/**
 * 
 * @param {string} alpha2
 * 
 * @return {Country}
 */
function countryFromAlpha2(alpha2:string):Country {
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
 * @return {Country}
 */
function countryFromAlpha3(alpha3:string):Country {
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
 * @return {Country}
 */
export function countryFromName(name:string):Country {
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
