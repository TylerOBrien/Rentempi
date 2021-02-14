/**
 * Global Imports
*/

import React, { useContext, useEffect, useRef, useState } from 'react';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { ItemPickerContext, ItemPickerItem } from '~/providers/ItemPickerProvider';
import { FormProps } from '~/util/Form';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface ItemPickerProps extends FormProps, TailwindEnabledProps {
  name: string;
  items: Array<ItemPickerItem>;
}

/**
 * Exports
*/

export function ItemPicker(props:ItemPickerProps) {
  /** Refs **/

  const isMountedRef = useRef<boolean>();

  /** Contexts **/

  const picker = useContext(ItemPickerContext);

  /** States **/

  const [ selected, setSelected ] = useState<ItemPickerItem>();

  /** Helpers **/

  const hasPressed = !!picker.itemsRef.current;
  const initialValueIndex = ( !!props.initialValue && props.items.findIndex(itr => itr.id === props.initialValue?.id) );
  
  /** Side-Effects **/

  useEffect(() => {
    if (isMountedRef.current) {
      if (props.onChangeValue) {
        props.onChangeValue(selected);
      }
    } else {
      isMountedRef.current = true;
    }
  }, [ selected ]);

  /** Event Listeners **/
  
  /**
   * @return {void}
   */
  const handleChoose = (item:ItemPickerItem, index:number):void => {
    setSelected(item);
    picker.setIsActive(false);
  };
  
  /**
   * @return {void}
   */
  const handleReset = ():void => {
    setSelected(null);
    picker.setIsActive(false);
  };
  
  /**
   * @return {void}
   */
  const handlePress = ():void => {
    picker.itemsRef.current = props.items;
    picker.handleChooseRef.current = handleChoose;
    picker.handleResetRef.current = handleReset;

    requestAnimationFrame(() => picker.setIsActive(true));
  };
  
  /** Output **/

  return (
    <LabeledField
      style={ props.style }
      tailwind={ props.tailwind }
      label={ props.label }
      labelType={ props.labelType }
      labelPosition={ props.labelPosition }
    >
      <Pressable onPress={ handlePress } disabled={ hasPressed }>
        <Text>
          { selected?.name || props.items[initialValueIndex]?.name || props.placeholder || 'Select…' }
        </Text>
      </Pressable>
    </LabeledField>
  );
}
