/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Exports
*/

export function useForm() {
  /** States **/

  const [ isLoading, setIsLoading ] = useState();
  const [ isSubmitting, setIsSubmitting ] = useState();

  /** Output **/

  return {
    isLoading,
    setIsLoading,
    isSubmitting,
    setIsSubmitting
  };
}
