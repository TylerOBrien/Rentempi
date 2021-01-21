/**
 * Types/Interfaces
*/

export type Emptiable = 'array' | 'string';

/**
 * Exports
*/

/**
 * 
 */
export function ThrowUnexpectedTypeError(name:string, expected:string, received:string) {
  throw new Error(`The '${ name }' param is type ${ received } but ${ expected } was expected`);
}

/**
 * 
 */
export function ThrowUnexpectedEmptyError(name:string, type:Emptiable) {
  throw new Error(`The '${ name }' ${ type } param is empty`);
}

/**
 * Namespaced Exports
*/

export const Assert = {
  ThrowUnexpectedTypeError,
  ThrowUnexpectedEmptyError
};
