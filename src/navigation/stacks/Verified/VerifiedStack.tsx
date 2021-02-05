/**
 * Global Imports
*/

import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Local Imports
*/

import * as VerifiedScreens from '~/screens/Verified';

/**
 * Locals
*/

const VerifiedRouterStack = createStackNavigator();

/**
 * Exports
*/

export function VerifiedStack():ReactElement {
  return (
    <VerifiedRouterStack.Navigator>
      {
        Object.entries(VerifiedScreens)
              .map(([name, screen], index) => (
          <VerifiedRouterStack.Screen
            key={ index }
            name={ name }
            component={ screen }
          />
        ))
      }
    </VerifiedRouterStack.Navigator>
  );
}
