/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Local Imports
*/

import { AlertsOverlay } from '~/components/Alert';
import { UserStatusGuard } from '~/components/Guard';
import { GuestStack, UnverifiedStack, VerifiedStack } from '~/navigation/stacks';
import { ApiProvider, AlertProvider, AuthProvider, FormProvider, NetInfoProvider, UserProvider } from '~/providers';

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
    <View style={ styles.overlay }>
      <AlertsOverlay />
    </View>
  );
}

/**
 * Exports
*/

export function EntryPoint() {
  return (
    <NetInfoProvider>
      <AuthProvider>
        <UserProvider>
          <ApiProvider>
            <AlertProvider>
              <FormProvider>
                <EntryPointMain />
                <EntryPointOverlay />
              </FormProvider>
            </AlertProvider>
          </ApiProvider>
        </UserProvider>
      </AuthProvider>
    </NetInfoProvider>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  }
});
