/**
 * Global Imports
*/

import React, { Suspense } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as GuestScreenConfigs from '~/screens/Guest/configs';
import { ScreenConfig } from '~/config';
import { Text } from '~/components/Base';

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
    <Suspense fallback={ <Text>Loading</Text> }>
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
    </Suspense>
  );
}
