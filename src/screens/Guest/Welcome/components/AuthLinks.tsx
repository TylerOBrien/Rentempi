/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';
import { Button } from '~/components/Button';
import { Row } from '~/components/Grid';
import { Link } from '~/components/Link';

/**
 * Types/Interfaces
*/

export interface AuthLinksProps {
  
}

/**
 * Exports
*/

export function AuthLinks(props:AuthLinksProps) {
  return (
    <Row tailwind='justify-between'>
      <Link
        label='Login'
        tailwind='w-45p py-4 rounded-full bg-indigo-500'
        labelContainerProps={{ tailwind: 'text-base text-indigo-100 text-center' }}
        container={ Button }
        to={ ScreenConfig.guest.Login }
      />
      <Link
        label='Create Account'
        tailwind='w-45p py-4 rounded-full bg-indigo-500'
        labelContainerProps={{ tailwind: 'text-base text-indigo-100 text-center' }}
        container={ Button }
        to={ ScreenConfig.guest.Register }
      />
    </Row>
  );
}
