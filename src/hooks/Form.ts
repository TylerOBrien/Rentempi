/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Types/Interfaces
*/

export interface FormHook {
  isLoading: boolean;
  isSubmitting: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Exports
*/

export function useForm() {
  /** States **/

  const [ isLoading, setIsLoading ] = useState<boolean>();
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>();

  /** Output **/

  return {
    isLoading,
    setIsLoading,
    isSubmitting,
    setIsSubmitting
  };
}
