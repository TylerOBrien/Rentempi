/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useRef, useState, FunctionComponent } from 'react';
import { LayoutChangeEvent } from 'react-native';

/**
 * Types/Interfaces
*/

export interface SwitchProps {
  current: number;
  components: Array<FunctionComponent>;
  onLayout?: (event:LayoutChangeEvent) => void;
}

/**
 * Components
*/

export function Switch(props:SwitchProps) {
  /** Refs **/

  const activeRef = useRef<number>();
  const visibleRef = useRef<ReactNode>();

  /** States **/

  const [ , setForceRender ] = useState<boolean>();

  /** Setup **/

  if (!visibleRef.current) {
    activeRef.current = props.current;
    visibleRef.current = React.createElement(props.components[props.current]);
  }

  /** Side-Effects **/

  useEffect(() => {
    if (props.current !== activeRef.current) {
      activeRef.current = props.current;
      visibleRef.current = React.createElement(props.components[props.current]);
      setForceRender(current => !current);
    }
  }, [ props.current ]);

  /** Output **/

  return visibleRef.current;
}
