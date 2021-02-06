/**
 * Global Imports
*/

import 'react-native-gesture-handler';
import React, { Fragment, useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Local Imports
*/

import { ThemeConfig } from '~/config';

import { EntryPoint } from '~/components/EntryPoint';
import { AppContext, AppProvider } from '~/providers/AppProvider';

/**
 * Locals
*/

function Main() {
  /** Contexts **/

  const { statusBarStyle, isStatusBarHidden } = useContext(AppContext);
  
  /** Output **/

  return (
    <Fragment>
      <StatusBar
        hidden={ isStatusBarHidden }
        barStyle={ statusBarStyle || ThemeConfig.defaults.statusBarStyle }
      />
      <SafeAreaView style={ styles.container }>
        <EntryPoint />
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
    flex: 1
  }
});
