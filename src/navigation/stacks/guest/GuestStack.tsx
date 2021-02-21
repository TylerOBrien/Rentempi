/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as GuestScreenConfigs from '~/screens/guest/configs';
import { ScreenConfig } from '~/config';

/**
 * Locals
*/

const Configs = Object.entries(GuestScreenConfigs);
const GuestRouterStack = createStackNavigator();

/**
 * Exports
*/

export function GuestStack() {
  return (
    <GuestRouterStack.Navigator initialRouteName={ ScreenConfig.initial.guest }>
      {
        Configs.map(([, config], index) => (
          <GuestRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </GuestRouterStack.Navigator>
  );
}
