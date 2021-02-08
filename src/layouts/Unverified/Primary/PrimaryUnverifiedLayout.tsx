/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface PrimaryUnverifiedLayoutProps {
  children: ReactNode;
}

/**
 * Exports
*/

export function PrimaryUnverifiedLayout(props:PrimaryUnverifiedLayoutProps) {
  return (
    <View tailwind='flex-auto justify-center items-center bg-primary'>
      <View>
        <Text tailwind='text-3xl text-white'>
          Verify Account
        </Text>
        { props.children }
      </View>
    </View>
  );
}
