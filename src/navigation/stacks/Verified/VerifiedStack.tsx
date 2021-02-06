/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as VerifiedScreenConfigs from '~/screens/Verified/configs';
import { ScreenConfig } from '~/config';

/**
 * Locals
*/

const Configs = Object.entries(VerifiedScreenConfigs);
const VerifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function VerifiedStack() {
  return (
    <VerifiedRouterStack.Navigator initialRouteName={ ScreenConfig.initial.Verified }>
      {
        Configs.map(([, config], index) => (
          <VerifiedRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </VerifiedRouterStack.Navigator>
  );
}
