/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface FormProps extends TailwindProps {
  container?: FunctionComponent<TailwindProps>;
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
