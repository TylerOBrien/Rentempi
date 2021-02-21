/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as UndentifiedScreenConfigs from '~/screens/unidentified/configs';
import { ScreenConfig } from '~/config';

/**
 * Locals
*/

const Configs = Object.entries(UndentifiedScreenConfigs);
const UndentifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function UndentifiedStack() {
  return (
    <UndentifiedRouterStack.Navigator initialRouteName={ ScreenConfig.initial.undentified }>
      {
        Configs.map(([, config], index) => (
          <UndentifiedRouterStack.Screen
            key={ index }
            { ...config.stack }
          />
        ))
      }
    </UndentifiedRouterStack.Navigator>
  );
}
