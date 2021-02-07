/**
 * Global Imports
*/

import { useContext, useState } from 'react';
import { FormikHelpers } from 'formik';
import { AxiosError } from 'axios';

/**
 * Local Imports
*/

import { FormContext } from '~/providers/FormProvider';
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

  /** Contexts **/

  const { errors, setErrors } = useContext(FormContext);

  /** Event Handlers **/

  const handleError = <Fields>(formik:FormikHelpers<Fields>, error:AxiosError) => {
    const newErrors = {};

    for (const field in error.response.data.errors) {
      newErrors[field] = error.response.data.errors[field].join('\t');
    }
    
    setErrors(newErrors);
    formik.setSubmitting(false);

    if (error.response.data.message) {
      alerter.error(error.response.data.message);
    }
  };

  /** Output **/

  return {
    errors,
    handleError
  };
}
