/**
 * Global Imports
*/

import { FormikHelpers } from 'formik';

/**
 * Exports
*/

export type FormikSubmit<T> = (values:T, helpers:FormikHelpers<T>) => void | Promise<void>;
