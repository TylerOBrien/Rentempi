/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AppDriver } from '~/system';

import { Text } from '~/components/Base';
import { Button } from '~/components/Button';
import { Row } from '~/components/Grid';
import { Link } from '~/components/Link';

import { WelcomeGuestLayout } from '~/layouts/Guest';

/**
 * Types/Interfaces
*/

export interface WelcomeProps {
  
};

/**
 * Exports
*/

export function Welcome(props:WelcomeProps) {
  return (
    <WelcomeGuestLayout>
      <Text tailwind='text-2xl text-white'>
        Welcome
      </Text>
      <Row>
        <Link
          label='Login'
          container={ Button }
          to={ AppDriver.Screen.Guest.Login }
        />
        <Link
          label='Create Account'
          container={ Button }
          to={ AppDriver.Screen.Guest.Register }
        />
      </Row>
      <Link to={ AppDriver.Screen.Guest.ForgotPassword }>
        <Text tailwind='text-lg text-white'>
          Trouble signing in?
        </Text>
      </Link>
    </WelcomeGuestLayout>
  );
}
