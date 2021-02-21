/**
 * Global Imports
*/

import React, { useEffect, useState, FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import { useSession } from '~/hooks';

/**
 * Types/Interfaces
*/

export interface UserStatusGuardProps {
  loading: FunctionComponent;
  guest: FunctionComponent;
  unidentified: FunctionComponent;
  identified: FunctionComponent;
}

/**
 * Locals
*/

const GuardStack = createStackNavigator();
const GuardScreenOptions = { headerShown: false };

/**
 * Exports
*/

export function UserStatusGuard(props:UserStatusGuardProps) {
  /** Hooks **/

  const session = useSession();

  /** States **/

  const [ route, setRoute ] = useState<string>();

  /** Side-Effects **/

  useEffect(() => {
    setRoute(
      !session.user
        ? 'guest'
        : session.user.is_identified
          ? 'identified'
          : 'unidentified' );
  }, [ session.user ]);
  
  /** Output **/

  return (
    <GuardStack.Navigator initialRouteName='loading'>
      <GuardStack.Screen
        name={ route || 'loading' }
        component={ props[route || 'loading'] }
        options={ GuardScreenOptions }
      />
    </GuardStack.Navigator>
  );
}
