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

  if (session.user) {
    if (session.user.is_identified) {
      return <props.verified />;
    } else {
      return <props.unverified />;
    }
  }
  
  return <props.guest />;
}
