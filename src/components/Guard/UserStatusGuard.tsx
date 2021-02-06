/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { useUser } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface UserStatusGuardProps {
  guest: FunctionComponent;
  unverified: FunctionComponent;
  verified: FunctionComponent;
  children?: ReactNode;
}

/**
 * Components
*/

export function UserStatusGuard(props:UserStatusGuardProps) {
  /** Hooks **/

  const session = useUser();
  
  /** Output **/
  
  switch (session.user?.status) {
  case 'Unverified':
    return <props.unverified />;
  case 'Verified':
    return <props.verified />;
  }

  return <props.guest />;
}
