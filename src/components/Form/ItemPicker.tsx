/**
 * Global Imports
*/

import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { ItemPickerContext, ItemPickerItem } from '~/providers/ItemPickerProvider';
import { FormFieldProps } from '~/util/Form';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/

import { LabeledField } from './LabeledField';

/**
 * Types/Interfaces
*/

export interface ItemPickerProps extends FormFieldProps<ItemPickerItem>, TailwindProps {
  name: string;
  items: Array<ItemPickerItem>;
}

/**
 * Exports
*/

export function ItemPicker(props:ItemPickerProps) {
  /** Config **/

  const tailwinds = {
    field: Tailwind.get(props.tailwind, 'field'),
    text: Tailwind.get(props.tailwind, 'text')
  };

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
      picker.setIsActive(false);
    } else {
      isMountedRef.current = true;
    }
  }, [ selected ]);

  /** Event Listeners **/
  
  /**
   * @return {void}
   */
  const handleChoose = (item:ItemPickerItem, index:number):void => {
    if (selected?.id !== item.id) {
      setSelected(item);
    } else {
      picker.setIsActive(false);
    }
  };
  
  /**
   * @return {void}
   */
  const handleReset = ():void => {
    if (selected) {
      setSelected(null);
    } else {
      picker.setIsActive(false);
    }
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
      <Pressable tailwind={ tailwinds.field } onPress={ handlePress } disabled={ hasPressed }>
        <Text tailwind={ tailwinds.text } style={ styles.text }>
          { selected?.name || props.items[initialValueIndex]?.name || props.placeholder || 'Select…' }
        </Text>
      </Pressable>
    </LabeledField>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});
