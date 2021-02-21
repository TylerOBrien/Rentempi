/**
 * Global Imports
*/

import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';
import { Text } from '~/components/Base';
import { Divider } from '~/components/Divider';
import { Button } from '~/components/Button';
import { Link } from '~/components/Link';

/**
 * Types/Interfaces
*/

export interface HelpLinksProps {
  onPressContactUs: Function;
}

/**
 * Exports
*/

export function HelpLinks(props:HelpLinksProps) {
  return (
    <Fragment>
      <Divider
        label='Need help?'
        tailwind={{
          container: 'my-8',
          line: 'bg-gray-400'
        }}
      />

      <Link
        tailwind='self-center w-45p py-4 rounded-2xl bg-yellow-400'
        to={ ScreenConfig.guest.ForgotPassword }
      >
        <Text tailwind='text-center text-lg text-black'>
          Recover Account
        </Text>
      </Link>

      <Button
        label='Contact Us'
        onPress={ props.onPressContactUs }
        tailwind={{
          container: 'self-center w-45p mt-4 py-4 rounded-2xl bg-yellow-400',
          label: 'text-center text-lg'
        }}
      />
    </Fragment>
  );
}
