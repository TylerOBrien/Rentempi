/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Local Imports
*/

import { UserStatusGuard } from '~/components/Guard';
import { GuestStack, UnverifiedStack, VerifiedStack } from '~/navigation/stacks';
import { ApiProvider, AlertProvider, AuthProvider, UserProvider } from '~/providers';

/**
 * Locals
*/

function EntryPointMain() {
  return (
    <UserStatusGuard
      guest={ GuestStack }
      unverified={ UnverifiedStack }
      verified={ VerifiedStack }
    />
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

/**
 * Styles
*/

const styles = StyleSheet.create({
  
});
