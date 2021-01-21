/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import { Router } from '~/components';
import { GuestScreens } from '~/screens';

/**
 * Locals
*/

const GuestRouterStack = createStackNavigator();

/**
 * Exports
*/

/**
 * 
 */
export function GuestRouter(props) {
  return (
    <Router
      initialRouteName='Welcome'
      stack={ GuestRouterStack }
      screens={ GuestScreens }
      screenOptions={{
        headerShown: false
      }}
    />
  );
}