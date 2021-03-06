/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';
import { ScrollView, View } from '~/components/Base';
import { Tailwind } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { Header } from './components';

/**
 * Types/Interfaces
*/

export interface WelcomeGuestLayoutProps {
  children: ReactNode;
}

/**
 * Exports
*/

export function WelcomeGuestLayout(props:WelcomeGuestLayoutProps) {
  return (
    <ScrollView style={ styles.container } contentContainerStyle={ styles.inner }>
      <View tailwind='flex-auto h-full justify-center py-8 bg-primary'>
        <View style={ styles.contentContainer } tailwind='h-full rounded-2xl border-2 border-secondary'>
          <View tailwind='h-full p-8 rounded-2xl border-2 border-tertiary bg-white'>
            <Header />
            { props.children }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Tailwind.color('primary')
  },

  inner: {
    flexGrow: 1
  },

  contentContainer: {
    alignSelf: 'center',
    width: Math.max(500, ScreenConfig.dimensions.min) - 32
  }
});
