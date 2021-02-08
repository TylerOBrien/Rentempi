/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useRef, useState, FunctionComponent } from 'react';
import { LayoutChangeEvent } from 'react-native';

/**
 * Types/Interfaces
*/

export interface SwitchProps {
  active: number;
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
    activeRef.current = props.active;
    visibleRef.current = React.createElement(props.components[props.active]);
  }

  /** Side-Effects **/

  useEffect(() => {
    if (props.active !== activeRef.current) {
      activeRef.current = props.active;
      visibleRef.current = React.createElement(props.components[props.active]);
      setForceRender(current => !current);
    }
  }, [ props.active ]);

  /** Output **/

  return visibleRef.current;
}
