/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as IdentifiedScreenConfigs from '~/screens/Identified/configs';
import { ScreenConfig } from '~/config';

/**
 * Locals
*/

const Configs = Object.entries(IdentifiedScreenConfigs);
const IdentifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function IdentifiedStack() {
  return (
    <IdentifiedRouterStack.Navigator initialRouteName={ ScreenConfig.initial.Identified }>
      {
        Configs.map(([, config], index) => (
          <IdentifiedRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </IdentifiedRouterStack.Navigator>
  );
}
