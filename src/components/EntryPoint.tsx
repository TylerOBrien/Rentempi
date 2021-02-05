/**
 * Global Imports
*/

import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

function EntryPointMain():ReactElement {
  return (
    <View>
      <Text>Entry Point</Text>
    </View>
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
