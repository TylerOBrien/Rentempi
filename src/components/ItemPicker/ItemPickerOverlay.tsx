/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Modal } from '~/components/Modal';
import { ItemPickerContext } from '~/providers/ItemPickerProvider';

/**
 * Components
*/

export function ItemPickerOverlay() {
  /** Contexts **/

  const { isActive } = useContext(ItemPickerContext);

  /** Output **/
  
  return (
    <Modal visible={ isActive }>
      <View style={ styles.container }>
        
      </View>
    </Modal>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    
  }
});
