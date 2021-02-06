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

export interface PrimaryGuestLayoutProps {
  children: ReactNode;
};

/**
 * Exports
*/

export function PrimaryGuestLayout(props:PrimaryGuestLayoutProps) {
  return (
    <Fragment>
      <Header />
      <View>
        { props.children }
      </View>
    </Fragment>
  );
}
