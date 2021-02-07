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

  const { isActive, setIsActive, itemsRef } = useContext(ItemPickerContext);

  /** Event Handlers **/

  const handleReset = () => {
    //
  };

  const handleCancel = () => {
    //
  };

  const handlePress = (item:ItemPickerItem, index:number) => {
    //
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
                <Text>{ item.name }</Text>
              </Pressable>
            ))
          }
        </ScrollView>
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
    height: 400,
    borderRadius: 16
  },

  item: {
    padding: 16,
    backgroundColor: 'white'
  },

  itemFirst: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },

  itemLast: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  }
});
