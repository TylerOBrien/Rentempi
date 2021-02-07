/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AppConfig } from '~/config';
import { Text } from '~/components/Base';

/**
 * Exports
*/

export function Header() {
  return (
    <Text tailwind='text-center text-2xl'>
      Welcome to { AppConfig.name }
    </Text>
  );
}
