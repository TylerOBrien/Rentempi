/**
 * Global Imports
*/

import React, { Fragment, ReactNode } from 'react';

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
};

/**
 * Exports
*/

export function WelcomeGuestLayout(props:WelcomeGuestLayoutProps) {
  return (
    <Fragment>
      <Header />
      <View>
        { props.children }
      </View>
    </Fragment>
  );
}
