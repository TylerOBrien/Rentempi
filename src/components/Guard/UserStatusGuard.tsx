/**
 * Global Imports
*/

import React, { useContext, useEffect, useState, FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import { useSession } from '~/hooks';

/**
 * Types/Interfaces
*/

export type UserStatusGuardContext = string;

export interface UserStatusGuardScreenProps {
  component: FunctionComponent;
}

export interface UserStatusGuardProps {
  guest: FunctionComponent;
  unidentified: FunctionComponent;
  identified: FunctionComponent;
}

/**
 * Locals
*/

const GuardStack = createStackNavigator();
const GuardContext = React.createContext<UserStatusGuardContext>(undefined);
const GuardScreenOptions = { headerShown: false };

/**
 * Factories
*/

function createGuardScreen(component:FunctionComponent) {
  return () => {
    /** Context **/

    const navigation = useNavigation();

    /** Context **/

    const route = useContext(GuardContext);

    /** Side-Effects **/

    useEffect(() => {
      if (route) {
        navigation.navigate(route);
      }
    }, [ route ]);
    
    /** Output **/

    return React.createElement(component);
  };
}

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
    <GuardContext.Provider value={ route }>
      <GuardStack.Navigator initialRouteName='loading'>
        <GuardStack.Screen
          name='loading'
          component={ createGuardScreen(() => null) }
          options={ GuardScreenOptions }
        />
        <GuardStack.Screen
          name='guest'
          component={ createGuardScreen(props.guest) }
          options={ GuardScreenOptions }
        />
        <GuardStack.Screen
          name='unidentified'
          component={ createGuardScreen(props.unidentified) }
          options={ GuardScreenOptions }
        />
        <GuardStack.Screen
          name='identified'
          component={ createGuardScreen(props.identified) }
          options={ GuardScreenOptions }
        />
      </GuardStack.Navigator>
    </GuardContext.Provider>
  );
}
