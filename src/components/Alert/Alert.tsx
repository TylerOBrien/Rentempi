/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { AlertItem } from '~/hooks/Alert';
import { TailwindEnabledProps } from '~/util/TailwindCss'

/**
 * Types/Interfaces
*/

export interface AlertProps extends TailwindEnabledProps {
  item: AlertItem;
}

/**
 * Components
*/

export function Alert(props:AlertProps) {
  return (
    <View>
      <Text>{ props.item.message }</Text>
    </View>
  );
}
