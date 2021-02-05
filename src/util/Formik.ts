/**
 * Global Imports
*/

import { FormikHelpers } from 'formik';

/**
 * Exports
*/

export type FormikSubmit<T> = (values:T, formikHelpers:FormikHelpers<T>) => void | Promise<void>;
