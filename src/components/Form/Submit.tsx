/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { Button } from '~/components/Button';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface SubmitProps extends TailwindEnabledProps {
  label?: string;
  container?: FunctionComponent<TailwindEnabledProps>;
  formik?: boolean;
  onPress?: Function;
};

/**
 * Exports
*/

export function Submit(props:SubmitProps) {
  /** Contexts **/

  const formik = props.formik && useFormikContext();

  /** Output **/

  return (
    <Button
      label={ props.label }
      container={ props.container }
      style={ props.style }
      tailwind={ props.tailwind }
      loading={ false }
      disabled={ false }
      onPress={ formik ? formik.handleSubmit : props.onPress }
      onLayout={ props.onLayout }
    />
  );
}

Submit.defaultProps = {
  formik: true
};
