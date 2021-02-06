/**
 * Global Imports
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as GuestScreens from '~/screens/Guest';

/**
 * Locals
*/

const GuestRouterStack = createStackNavigator();

/**
 * Exports
*/

export function GuestStack() {
  return (
    <GuestRouterStack.Navigator>
      {
        Object.entries(GuestScreens)
              .map(([name, screen], index) => (
          <GuestRouterStack.Screen
            key={ index }
            name={ name }
            component={ screen }
          />
        ))
      }
    </GuestRouterStack.Navigator>
  );
}
