/**
 * Global Imports
*/

import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Local Imports
*/

import { GuestStack } from '~/navigation/stacks/Guest';
import { ApiProvider, AlertProvider, AuthProvider, UserProvider } from '~/providers';

/**
 * Locals
*/

function EntryPointMain():ReactElement {
  return (
    <GuestStack />
  );
}

function EntryPointOverlay():ReactElement {
  return (
    <View>

    </View>
  );
}

/**
 * Exports
*/

export function EntryPoint():ReactElement {
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

/**
 * Styles
*/

const styles = StyleSheet.create({
  
});
