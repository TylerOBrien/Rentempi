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
