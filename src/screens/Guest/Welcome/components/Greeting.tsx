/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Exports
*/

export function Greeting() {
  return (
    <View tailwind='py-8'>
      <Text tailwind='text-lg text-center text-black'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ligula malesuada, condimentum lorem sit
        amet, dictum metus. Ut tempor ante dui, eget accumsan arcu placerat euismod.
      </Text>
    </View>
  );
}
