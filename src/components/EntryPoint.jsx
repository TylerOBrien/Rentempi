/**
 * Global Imports
*/

import React from 'react';
import React, { View } from 'react-native';

/**
 * Local Imports
*/

import { ApiProvider } from '~/providers/ApiProvider';
import { AlertProvider } from '~/providers/AlertProvider';
import { AuthProvider } from '~/providers/AuthProvider';
import { UserProvider } from '~/providers/UserProvider';

/**
 * Locals
*/

function EntryPointMain() {
  return (
    <View>
      
    </View>
  );
}

function EntryPointOverlay() {
  return (
    <View>

    </View>
  );
}

/**
 * Exports
*/

export function EntryPoint() {
  return (
    <AuthProvider>
      <UserProvider>
        <ApiProvider>
          <AlertProvider>
            <EntryPointMain />
            <EntryPointOverlay />
          </AlertProvider>
        </ApiProvider>
      </UserProvider>
    </AuthProvider>
  );
}
