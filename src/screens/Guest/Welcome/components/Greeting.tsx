/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface GreetingProps {
  
}

/**
 * Exports
*/

export function Greeting(props:GreetingProps) {
  return (
    <View tailwind='py-8'>
      <Text tailwind='text-base text-center text-black'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ligula malesuada, condimentum lorem sit
        amet, dictum metus. Ut tempor ante dui, eget accumsan arcu placerat euismod.
      </Text>
    </View>
  );
}
