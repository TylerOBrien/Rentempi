/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { AlertItem } from '~/hooks/Alerter';
import { TailwindEnabledProps } from '~/util/TailwindCss'

/**
 * Types/Interfaces
*/

export interface AlertProps extends TailwindEnabledProps {
  type: string;
  value: string;
}

/**
 * Components
*/

export function Alert(props:AlertProps) {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text>{ props.value }</Text>
    </View>
  );
}
