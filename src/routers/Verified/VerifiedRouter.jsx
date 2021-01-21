/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import { Router } from '~/components';
import { VerifiedScreens } from '~/screens';

/**
 * Locals
*/

const VerifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

/**
 * 
 */
export function VerifiedRouter(props) {
  return (
    <Router
      initialRouteName='Statistics'
      stack={ VerifiedRouterStack }
      screens={ VerifiedScreens }
      screenOptions={{
        animationEnabled: false,
        headerShown: false
      }}
    />
  );
}