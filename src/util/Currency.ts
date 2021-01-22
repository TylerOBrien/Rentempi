/**
 * Local Vars
*/

const commaRegex = new RegExp(',', 'g');
const oneDecimalRegex = new RegExp('\.\d{1}$');
const twoDecimalsRegex = new RegExp('\.\d{2}$');

/**
 * Exports
*/

/**
 * @param {string} localeString
 * 
 * @return {number}
 */
export function cents(localeString:string, thousandsSeparator:string=',', decimalPoint:string='.'):number {
  const thousandsSeparatorRegex = ( thousandsSeparator === ',' ? commaRegex : new RegExp(thousandsSeparator, 'g') );

  let value = localeString.replace(thousandsSeparatorRegex, '');

  if (value.match(twoDecimalsRegex)) {
    value = value.replace(decimalPoint, '');
  } else if (value.match(oneDecimalRegex)) {
    value = value.replace(decimalPoint, '') + '0';
  } else {
    value += '00';
  }

  return parseInt(value.slice(1));
}

/**
 * @param {number} cents
 * @param {string} currencySign
 * @param {string} thousandsSeparator
 * @param {string} decimalPoint
 * 
 * @return {string}
 */
export function localeString(cents:number, currencySign:string='$', thousandsSeparator:string=',', decimalPoint:string='.'):string {
  let currency = (cents / 100).toFixed(2);

  if (decimalPoint !== '.') {
    const pivot = currency.indexOf('.');
    currency = currency.substring(0, pivot) + decimalPoint + currency.substring(pivot + 1);
  }

  // If less than $1000.00 then there are no thousands separators to be added.

  if (cents < 100000) {
    return currencySign + currency;
  }

  // Add thousands separators.

  let formatted = currency.slice(-3);
  const end = currency.length;

  // Iterate backward, skipping the last three characters (i.e. the decimal
  // point and two digits representing the cents), adding a separator every
  // three characters.

  for (let i = (end-3); i > 2; i -= 3) {
    formatted = ( (i === 3 ? '' : thousandsSeparator) + currency.slice(i-3, i) ) + formatted;
  }

  return currencySign + currency.slice(0, end % 3) + formatted;
}

/**
 * Namespaced Exports
*/

export const Currency = { cents, localeString };
