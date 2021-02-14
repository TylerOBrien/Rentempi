/**
 * Global Imports
*/

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Pressable, Text, ScrollView, View } from '~/components/Base';
import { Modal } from '~/components/Modal';
import { ItemPickerContext, ItemPickerItem } from '~/providers/ItemPickerProvider';

/**
 * Locals
*/

const itemAndroidRipple = {
  radius: 256
};

/**
 * Components
*/

export function ItemPickerOverlay() {
  /** Contexts **/

  const { isActive, setIsActive, itemsRef, handleChooseRef, handleResetRef } = useContext(ItemPickerContext);

  /** Event Handlers **/

  const handleReset = () => {
    requestAnimationFrame(() => handleResetRef.current());
  };

  const handleCancel = () => {
    requestAnimationFrame(() => setIsActive(false));
  };

  const handlePress = (item:ItemPickerItem, index:number) => {
    requestAnimationFrame(() => handleChooseRef.current(item, index));
  };

  /** Output **/
  
  return (
    <Modal visible={ isActive }>
      <View style={ styles.container }>
        <ScrollView style={ styles.scroller }>
          {
            (itemsRef.current || []).map((item, index) => (
              <Pressable
                key={ index }
                style={ styles.item }
                android_ripple={ itemAndroidRipple }
                onPress={ handlePress.bind(this, item, index) }
              >
                <Text style={ styles.itemText }>{ item.name }</Text>
              </Pressable>
            ))
          }
        </ScrollView>
        <Pressable
          style={ styles.itemControlPressable }
          android_ripple={ itemAndroidRipple }
          onPress={ handleCancel }
        >
          <Text style={ styles.itemControlText }>Cancel</Text>
        </Pressable>
        <Pressable
          style={ styles.itemControlPressable }
          android_ripple={ itemAndroidRipple }
          onPress={ handleReset }
        >
          <Text style={ styles.itemControlText }>Reset</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'center',
    backgroundColor: 'blue'
  },

  container: {
    width: 300
  },

  scroller: {
    maxHeight: 400,
    borderRadius: 16
  },

  item: {
    padding: 16,
    backgroundColor: 'white'
  },

  itemText: {
    fontSize: 16
  },

  itemControlPressable: {
    padding: 16,
    backgroundColor: 'white'
  },

  itemControlText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
