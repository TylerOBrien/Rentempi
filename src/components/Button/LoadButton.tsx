/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useState } from 'react';

/**
 * Local Imports
*/

import { Button } from './Button';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface LoadButtonProps extends TailwindEnabledProps {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  onPress: Function;
}

/**
 * Exports
*/

export function LoadButton(props:LoadButtonProps) {
  /** States **/
  
  const [ isLoading, setIsLoading ] = useState<boolean>();
  
  /** Side-Effects **/
  
  useEffect(() => {
    if (isLoading) {
      props.onPress();
      setIsLoading(false);
    }
  }, [ isLoading ]);
  
  /** Output **/
  
  return (
    <Button
      label={ props.label }
      loading={ isLoading || props.loading }
      disabled={ isLoading || props.loading || props.disabled }
      onLayout={ props.onLayout }
      onPress={ () => setIsLoading(true) }
    >
      { props.children }
    </Button>
  );
}
