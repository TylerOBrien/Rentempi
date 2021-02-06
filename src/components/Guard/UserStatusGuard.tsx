/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';

/**
 * Local Imports
*/

import { useSession } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface UserStatusGuardProps {
  guest: FunctionComponent;
  unverified: FunctionComponent;
  verified: FunctionComponent;
}

/**
 * Components
*/

export function UserStatusGuard(props:UserStatusGuardProps) {
  /** Hooks **/

  const session = useSession();
  
  /** Output **/
  
  switch (session.user?.status) {
  case 'Unverified':
    return <props.unverified />;
  case 'Ok':
    return <props.verified />;
  }

  return <props.guest />;
}
