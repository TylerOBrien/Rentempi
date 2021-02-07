/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AppDriver } from '~/system';

import { Text, View } from '~/components/Base';
import { Divider } from '~/components/Divider';
import { Button } from '~/components/Button';
import { Row } from '~/components/Grid';
import { Link } from '~/components/Link';

import { WelcomeGuestLayout } from '~/layouts/Guest';

/**
 * Sibling Imports
*/

import { AuthLinks, Greeting } from './components';

/**
 * Types/Interfaces
*/

export interface WelcomeProps {
  
}

/**
 * Exports
*/

export function Welcome(props:WelcomeProps) {
  return (
    <WelcomeGuestLayout>
      <Greeting />
      <AuthLinks />

      <Divider
        label='Need help?'
        tailwind={{
          container: 'my-8',
          line: 'bg-gray-400'
        }}
      />

      <Link
        tailwind='self-center px-8 py-4 rounded-2xl bg-yellow-400'
        to={ AppDriver.Screen.Guest.ForgotPassword }
      >
        <Text tailwind='text-lg text-black'>
          Recover Account
        </Text>
      </Link>
    </WelcomeGuestLayout>
  );
}

export const WelcomeConfig = {
  stack: {
    name: 'Welcome',
    component: Welcome,
    options: {
      headerShown: false
    }
  }
};
