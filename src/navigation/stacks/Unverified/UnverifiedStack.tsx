/**
 * Global Imports
*/

import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as UnverifiedScreens from '~/screens/Unverified';

/**
 * Locals
*/

const UnverifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function UnverifiedStack():ReactElement {
  return (
    <UnverifiedRouterStack.Navigator>
      {
        Object.entries(UnverifiedScreens)
              .map(([name, screen], index) => (
          <UnverifiedRouterStack.Screen
            key={ index }
            name={ name }
            component={ screen }
          />
        ))
      }
    </UnverifiedRouterStack.Navigator>
  );
}
