/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as IdentifiedScreenConfigs from '~/screens/identified/configs';
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
    <IdentifiedRouterStack.Navigator initialRouteName={ ScreenConfig.initial.identified }>
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
