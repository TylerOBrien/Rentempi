/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface FormProps extends TailwindEnabledProps {
  container?: FunctionComponent<TailwindEnabledProps>;
  children?: ReactNode;
};

/**
 * Exports
*/

export function Form(props:FormProps) {
  return (
    <props.container style={ props.style } tailwind={ props.tailwind } onLayout={ props.onLayout }>
      { props.children }
    </props.container>
  );
}

Form.defaultProps = {
  container: View
};
