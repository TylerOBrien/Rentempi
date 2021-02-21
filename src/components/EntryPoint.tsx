/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Local Imports
*/

import { AlertsOverlay } from '~/components/Alert';
import { ItemPickerOverlay } from '~/components/ItemPicker';
import { UserStatusGuard } from '~/components/Guard';

import {
  GuestStack,
  UndentifiedStack,
  IdentifiedStack } from '~/navigation/stacks';

import {
  ApiProvider,
  AlertProvider,
  AuthProvider,
  FormProvider,
  ItemPickerProvider,
  NetInfoProvider,
  UserProvider } from '~/providers';

/**
 * Locals
*/

function EntryPointMain() {
  return (
    <UserStatusGuard
      guest={ GuestStack }
      unidentified={ UndentifiedStack }
      identified={ IdentifiedStack }
    />
  );
}

function EntryPointOverlay() {
  return (
    <View style={ styles.overlay }>
      <AlertsOverlay />
      <ItemPickerOverlay />
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
              <ItemPickerProvider>
                <FormProvider>
                  <EntryPointMain />
                  <EntryPointOverlay />
                </FormProvider>
              </ItemPickerProvider>
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
