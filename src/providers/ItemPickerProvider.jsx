/**
 * Global Imports
*/

import React, { useContext, useEffect, useRef, useState } from 'react';

/**
 * Local Imports
*/

import { Modal } from '~/components/Modal';
import { Pressable } from '~/components/Pressable';
import { Text, View } from '~/components/Base';

/**
 * Exports
*/

export const ItemPickerContext = React.createContext();

/**
 * 
 */
export function ItemPickerProvider(props) {
  /** Refs **/

  const itemsRef = useRef([]);
  const selectedValueRef = useRef();
  const handleChooseRef = useRef();
  const handleCancelRef = useRef();
  const handleResetRef = useRef();

  /** States **/

  const [ isActive, setIsActive ] = useState(false);

  /** Output **/

  return (
    <ItemPickerContext.Provider value={{ itemsRef, selectedValueRef, handleChooseRef, handleCancelRef, handleResetRef, isActive, setIsActive }}>
      { props.children }
    </ItemPickerContext.Provider>
  );
}

/**
 * 
 */
export function ItemPickerBase(props) {
  /** Contexts **/
  
  const { itemsRef, selectedValueRef, handleChooseRef, handleCancelRef, handleResetRef, isActive, setIsActive } = useContext(ItemPickerContext);
  
  /** Event Handlers **/

  /**
   * 
   */
  const handleCancel = () => {
    if (typeof handleCancelRef.current === 'function') {
      handleCancelRef.current();
    }

    setIsActive(false);
  };

  /**
   * 
   */
  const handleReset = () => {
    selectedValueRef.current = null;

    if (typeof handleResetRef.current === 'function') {
      handleResetRef.current();
    }

    setIsActive(false);
  };
  
  /**
   * 
   */
  const handleChoose = (item, index) => {
    if (typeof handleChooseRef.current === 'function') {
      handleChooseRef.current(item, index);
    }

    setIsActive(false);
  };
  
  /** Renderers **/

  /**
   * 
   */
  const renderItems = () => (
    itemsRef.current.map((item, index) => (
      <Pressable
        key={ index }
        onPress={ () => requestAnimationFrame(() => handleChoose(item, index)) }
        android_ripple={{ radius: 128 }}
      >
        <Text tailwind={[ 'p-4 text-base', index > 0 && 'border-t border-steps-gray-400', selectedValueRef.current?.id === item.id && 'font-bold bg-gray-400' ]}>
          { item.name }
        </Text>
      </Pressable>
    ))
  );
  
  /** Output **/
  
  return (
    <Modal visible={ isActive } transition={{ type: 'fade', duration: 250 }}>
      <View tailwind='w-1/4 bg-white'>
        { renderItems() }
      </View>
      <View tailwind='w-1/4 mt-4 bg-white'>
        <Pressable
          onPress={ () => requestAnimationFrame(handleCancel) }
          android_ripple={{ radius: 128 }}
        >
          <Text tailwind='p-4 text-base text-center'>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          onPress={ () => requestAnimationFrame(handleReset) }
          android_ripple={{ radius: 128 }}
        >
          <Text tailwind='p-4 text-base text-center border-t border-steps-gray-400'>
            Reset
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
}