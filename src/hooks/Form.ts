/**
 * Global Imports
*/

import { useState } from 'react';
import { FormikHelpers } from 'formik';
import { AxiosError } from 'axios';

/**
 * Local Imports
*/

import { useAlerter } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface FormHook {
  handleError: (formik:FormikHelpers<any>, error:AxiosError) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Exports
*/

export function useForm() {
  /** Hooks **/

  const alerter = useAlerter();

  /** States **/

  const [ isLoading, setIsLoading ] = useState<boolean>();
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>();

  /** Event Handlers **/

  const handleError = <Fields>(formik:FormikHelpers<Fields>, error:AxiosError) => {
    for (const field in error.response.data.errors) {
      formik.setFieldError(field, error.response.data.errors[field].join('\t'));
    }
    
    formik.setSubmitting(false);

    if (error.response.data.message) {
      alerter.error(error.response.data.message);
    }
  };

  /** Output **/

  return {
    handleError,
    isLoading,
    setIsLoading,
    isSubmitting,
    setIsSubmitting
  };
}
