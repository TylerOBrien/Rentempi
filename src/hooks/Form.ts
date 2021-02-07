/**
 * Global Imports
*/

import { useContext } from 'react';
import { FormikHelpers } from 'formik';
import { AxiosError } from 'axios';
import { showMessage } from 'react-native-flash-message';

/**
 * Local Imports
*/

import { FormContext } from '~/providers/FormProvider';

/**
 * Types/Interfaces
*/

export interface FormHook {
  errors: any;
  clearErrors: () => void;
  handleError: (formik:FormikHelpers<any>, error:AxiosError) => void;
}

/**
 * Exports
*/

export function useForm():FormHook {
  /** Contexts **/

  const { errors, setErrors } = useContext(FormContext);

  /** Helpers **/

  const clearErrors = () => {
    setErrors(null);
  };

  /** Event Handlers **/

  const handleError = <Fields>(formik:FormikHelpers<Fields>, error:AxiosError) => {
    const newErrors = {};

    for (const field in error.response.data.errors) {
      newErrors[field] = error.response.data.errors[field].join('\t');
    }
    
    setErrors(newErrors);
    formik.setSubmitting(false);

    if (error.response.data.message) {
      showMessage({
        type: 'danger',
        message: error.response.data.message
      });
    }
  };

  /** Output **/

  return {
    errors,
    clearErrors,
    handleError
  };
}
