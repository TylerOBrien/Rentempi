/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as UnverifiedScreenConfigs from '~/screens/Unverified/configs';
import { ScreenConfig } from '~/config';

/**
 * Locals
*/

const Configs = Object.entries(UnverifiedScreenConfigs);
const UnverifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function UnverifiedStack() {
  return (
    <UnverifiedRouterStack.Navigator initialRouteName={ ScreenConfig.initial.Unverified }>
      {
        Configs.map(([, config], index) => (
          <UnverifiedRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </UnverifiedRouterStack.Navigator>
  );
}
