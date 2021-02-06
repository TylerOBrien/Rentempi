/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind, TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export type Item = string;

export interface ItemContainerProps extends TailwindEnabledProps {
  
}

export interface ItemListContainerProps extends TailwindEnabledProps {
  
}

export interface ItemListProps extends TailwindEnabledProps {
  items: Array<Item>;
  prefix: 'number' | 'disc' | 'letter';
  container?: FunctionComponent<ItemListContainerProps>;
  containerProps?: ItemListContainerProps;
  itemContainer?: FunctionComponent<ItemContainerProps>;
  itemContainerProps?: ItemContainerProps;
}

/**
 * Exports
*/

export function ItemList(props:ItemListProps) {
  /** Renderers **/

  const renderNumberItemPrefix = (item:Item, index:number) => {
    return `${ index + 1 }. `;
  };

  const renderDiscItemPrefix = (item:Item, index:number) => {
    return '•';
  };

  const renderItemPrefix = (item:Item, index:number) => {
    return (
      <Text tailwind={ Tailwind.get(props.tailwind, 'prefix', false) }>
        {
          !props.prefix ? null
            : props.prefix === 'number' ? renderNumberItemPrefix(item, index)
            : props.prefix === 'letter' ? renderDiscItemPrefix(item, index)
            : props.prefix === 'disc'   ? renderDiscItemPrefix(item, index)
            : null
        }
      </Text>
    );
  };

  const renderItemContent = (item:Item, index:number) => (
    <Text
      style={{  }}
      tailwind={ Tailwind.get(props.tailwind, 'label', false) }
    >
      { item }
    </Text>
  );

  /** Output **/

  return (
    <props.container
      tailwind={ Tailwind.get(props.tailwind, 'container') }
    >
      {
        props.items.map((item, index) => (
          <props.itemContainer
            key={ index }
            style={ styles.itemContainer }
            tailwind={ Tailwind.get(props.tailwind, 'item', false) }
          >
            { renderItemPrefix(item, index) }
            { renderItemContent(item, index) }
          </props.itemContainer>
        ))
      }
    </props.container>
  );
}

ItemList.defaultProps = {
  prefix: 'disc',
  container: View,
  itemContainer: View
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row'
  }
});
