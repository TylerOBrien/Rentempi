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

const GuestRouterStack = createStackNavigator();

/**
 * Exports
*/

export function GuestStack() {
  return (
    <GuestRouterStack.Navigator initialRouteName={ ScreenConfig.initial.Guest }>
      {
        Object.entries(GuestScreenConfigs)
              .map(([, config], index) => (
          <GuestRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </GuestRouterStack.Navigator>
  );
}
