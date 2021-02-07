/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Sibling Imports
*/

import { Header } from './components';

/**
 * Types/Interfaces
*/

export interface WelcomeGuestLayoutProps {
  children: ReactNode;
}

/**
 * Exports
*/

export function WelcomeGuestLayout(props:WelcomeGuestLayoutProps) {
  return (
    <View tailwind='flex-auto justify-center bg-primary'>
      <View tailwind='self-center rounded-2xl w-1/2 border-2 border-secondary'>
        <View tailwind='w-full p-8 rounded-2xl border-2 border-tertiary bg-white'>
          <Header />
          { props.children }
        </View>
      </View>
    </View>
  );
}
