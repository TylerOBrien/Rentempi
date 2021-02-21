/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as GuestScreenConfigs from '~/screens/Guest/configs';
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
    <GuestRouterStack.Navigator initialRouteName={ ScreenConfig.initial.Guest }>
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
