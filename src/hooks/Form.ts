/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Types/Interfaces
*/

export interface FormHook {
  error: any;
  isLoading: boolean;
  isSubmitting: boolean;
  setError: React.Dispatch<React.SetStateAction<any>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Exports
*/

export function useForm() {
  /** States **/

  const [ error, setError ] = useState<any>();

  const [ isLoading, setIsLoading ] = useState<boolean>();
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>();

  /** Output **/

  return {
    error,
    setError,
    isLoading,
    setIsLoading,
    isSubmitting,
    setIsSubmitting
  };
}
