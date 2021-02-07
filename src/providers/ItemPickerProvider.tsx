/**
 * Global Imports
*/

import React, { useContext, useEffect, useRef, useState } from 'react';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { Modal } from '~/components/Modal';

/**
 * Types/Interfaces
*/

export interface ItemPickerItem {
  id: number;
  name: string;
}

export interface ItemPickerContextInterface {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  itemsRef: React.MutableRefObject<Array<ItemPickerItem>>;
  selectedValueRef: React.MutableRefObject<ItemPickerItem>;
  handleChooseRef: React.MutableRefObject<Function>;
  handleCancelRef: React.MutableRefObject<Function>;
  handleResetRef: React.MutableRefObject<Function>;
}

/**
 * Contexts
*/

export const ItemPickerContext = React.createContext<ItemPickerContextInterface>(undefined);

/**
 * Components
*/

export function ItemPickerProvider(props:any) {
  /** Refs **/

  const itemsRef = useRef<Array<ItemPickerItem>>();
  const selectedValueRef = useRef<ItemPickerItem>();
  const handleChooseRef = useRef<Function>();
  const handleCancelRef = useRef<Function>();
  const handleResetRef = useRef<Function>();

  /** States **/

  const [ isActive, setIsActive ] = useState<boolean>();

  /** Output **/

  return (
    <ItemPickerContext.Provider
      value={{
        isActive,
        setIsActive,
        itemsRef,
        selectedValueRef,
        handleChooseRef,
        handleCancelRef,
        handleResetRef
      }}
    >
      { props.children }
    </ItemPickerContext.Provider>
  );
}

export function ItemPickerBase() {
  /** Contexts **/
  
  const { isActive, setIsActive, itemsRef, selectedValueRef, handleChooseRef, handleCancelRef, handleResetRef } = useContext(ItemPickerContext);
  
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
