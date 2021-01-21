/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import { Router } from '~/components';
import { UnverifiedScreens } from '~/screens';

/**
 * Locals
*/

const UnverifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

/**
 * 
 */
export function UnverifiedRouter(props) {
  return (
    <Router
      initialRouteName='VerifyEmail'
      stack={ UnverifiedRouterStack }
      screens={ UnverifiedScreens }
      screenOptions={{
        animationEnabled: true,
        headerShown: false
      }}
    />
  );
}