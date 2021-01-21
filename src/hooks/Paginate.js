/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Exports
*/

/**
 * 
 */
export function usePaginate({ per, length }) {
  /** States **/

  const [ page, setPage ] = useState(0);

  /** Output **/

  return {
    page,
    setPage,
    pages: Math.ceil(length / per) || 0,
    offset: [
      page * per,
      (page * per) + per
    ]
  };
}