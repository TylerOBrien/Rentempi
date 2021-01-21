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
 * 
 * 
 * @param {number} cents
 * @param {string} currencySign
 * @param {string} thousandsSeparator
 * @param {string} decimalPoint
 * 
 * @return {string}
 */
export function currencyString(cents, currencySign='$', thousandsSeparator=',', decimalPoint='.') {
  const currency = (cents / 100).toFixed(2);

  if (decimalPoint !== '.') {
    currency[currency.length-2] = decimalPoint;
  }

  if (cents < 100000) {
    return currencySign + currency;
  }

  let formatted = currency.slice(-3);
  const end = currency.length;

  for (let i = (end-3); i > 2; i -= 3) {
    formatted = ( (i === 3 ? '' : thousandsSeparator) + currency.slice(i-3, i) ) + formatted;
  }

  return currencySign + currency.slice(0, end % 3) + formatted;
}

/**
 * 
 * 
 * @param {string} currencyString
 * 
 * @return {number}
 */
export function cents(currencyString, thousandsSeparator=',', decimalPoint='.') {
  const thousands = ( thousandsSeparator === ',' ? commaRegex : new RegExp(thousandsSeparator, 'g') );

  let value = currencyString.replace(thousands, '');

  if (value.match(twoDecimalsRegex)) {
    value = value.replace(decimalPoint, '');
  } else if (value.match(oneDecimalRegex)) {
    value = value.replace(decimalPoint, '') + '0';
  } else {
    value += '00';
  }

  return parseInt(value.slice(1));
}