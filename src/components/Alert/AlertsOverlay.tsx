/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { useAlerter } from '~/hooks';

/**
 * Sibling Imports
*/

import { Alert } from './Alert';

/**
 * Components
*/

export function AlertsOverlay() {
  /** Hooks **/

  const alerter = useAlerter();

  /** Output **/
  
  return (
    <View style={ styles.container } pointerEvents='box-none'>
      {
        (alerter.alerts || []).map((item, index) => (
          <Alert
            key={ index }
            onClose={ () => alerter.remove(item) }
            { ...alerter.fromKey(item) }
          />
        ))
      }
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16
  }
});
