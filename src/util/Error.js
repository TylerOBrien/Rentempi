/**
 * Exports
*/

/**
 * 
 */
export function ThrowUnexpectedTypeError(name, expected, received) {
  throw new Error(`The '${ name }' param is type ${ received } but ${ expected } was expected`);
}

/**
 * 
 */
export function ThrowUnexpectedEmpty(name, type) {
  throw new Error(`The '${ name }' ${ type } param is empty`);
}