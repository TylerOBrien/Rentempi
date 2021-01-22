/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Types/Interfaces
*/

export interface PaginateOptions {
  per:number;
  length:number;
}

export interface PaginateHook {
  page:number;
  setPage(page:number):void;
  pages:number;
  offset:number[];
}

/**
 * Exports
*/

export function usePaginate(options:PaginateOptions):PaginateHook {
  /** States **/

  const [ page, setPage ] = useState(0);

  /** Output **/

  return {
    page,
    setPage,
    pages: Math.ceil(options.length / options.per) || 0,
    offset: [
      page * options.per,
      (page * options.per) + options.per
    ]
  };
}
