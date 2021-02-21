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
  unidentified: FunctionComponent;
  identified: FunctionComponent;
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
      return <props.identified />;
    } else {
      return <props.unidentified />;
    }
  }
  
  return <props.guest />;
}
