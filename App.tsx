/**
 * Global Imports
*/

import 'react-native-gesture-handler';
import React, { Fragment, useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

/**
 * Local Imports
*/

import { ThemeConfig } from '~/config';
import { EntryPoint } from '~/components/EntryPoint';
import { AppContext, AppProvider } from '~/providers/AppProvider';
import { Tailwind } from '~/util';

/**
 * Locals
*/

function Main() {
  /** Contexts **/

  const { flashMessagePosition, statusBarStyle, backgroundColor, isStatusBarHidden } = useContext(AppContext);
  
  /** Output **/

  return (
    <Fragment>
      <StatusBar
        hidden={ isStatusBarHidden }
        barStyle={ statusBarStyle || ThemeConfig.defaults.statusBarStyle }
      />
      <SafeAreaView style={ backgroundColor ? [ styles.container, { backgroundColor } ] : styles.container }>
        <EntryPoint />
        <FlashMessage position={ flashMessagePosition || ThemeConfig.defaults.flashMessagePosition } />
      </SafeAreaView>
    </Fragment>
  );
}

/**
 * Exports
*/

export function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Main />
      </AppProvider>
    </NavigationContainer>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Tailwind.color('primary')
  }
});
