/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AppConfig } from '~/config';
import { Text, View } from '~/components/Base';

/**
 * Exports
*/

export function Header() {
  return (
    <View>
      <Text>{ AppConfig.name }</Text>
    </View>
  );
}
