/**
 * Global Imports
*/

import React, { createContext, useEffect, useRef, useState, MutableRefObject } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface ItemPickerItem {
  id: number;
  name: string;
}

export type ItemPickerItemHandler = (item:ItemPickerItem, index:number) => void;

export interface ItemPickerContextInterface {
  isActive: boolean;
  isVisible: boolean;
  setIsActive: SetStateHandler<boolean>;

  itemsRef: MutableRefObject<Array<ItemPickerItem>>;
  selectedItemRef: MutableRefObject<ItemPickerItem>;

  handleChooseRef: MutableRefObject<ItemPickerItemHandler>;
  handleCancelRef: MutableRefObject<Function>;
  handleResetRef: MutableRefObject<Function>;
}

/**
 * Contexts
*/

export const ItemPickerContext = createContext<ItemPickerContextInterface>(undefined);

/**
 * Components
*/

export function ItemPickerProvider(props:any) {
  /** Refs **/

  const isMountedRef    = useRef<boolean>();
  const itemsRef        = useRef<Array<ItemPickerItem>>();
  const selectedItemRef = useRef<ItemPickerItem>();
  const handleChooseRef = useRef<ItemPickerItemHandler>();
  const handleCancelRef = useRef<ItemPickerItemHandler>();
  const handleResetRef  = useRef<Function>();

  /** States **/

  const [ isActive,   setIsActive ]   = useState<boolean>();
  const [ isVisible,  setIsVisible ]  = useState<boolean>();

  /** Side-Effects **/

  useEffect(() => {
    if (isMountedRef.current) {
      setTimeout(() => {
        if (!isActive) {
          itemsRef.current = null;
          selectedItemRef.current = null;
          handleChooseRef.current = null;
          handleCancelRef.current = null;
          handleResetRef.current = null;
        }
        setIsVisible(!isActive);
      }, 500);
    } else {
      isMountedRef.current = true;
    }
  }, [ isActive ]);

  /** Output **/

  return (
    <ItemPickerContext.Provider
      value={{
        isActive,
        isVisible,
        setIsActive,
        itemsRef,
        selectedItemRef,
        handleChooseRef,
        handleCancelRef,
        handleResetRef
      }}
    >
      { props.children }
    </ItemPickerContext.Provider>
  );
}
