/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

interface TextListItemPrefixProps {
  index?: number;
}

export type TextListItem = string;

export interface TextListProps extends TailwindProps {
  items: Array<TextListItem>;
  prefix: 'number' | 'disc' | 'letter';
}

/**
 * Locals
*/

const prefixes = {
  disc():string {
    return '•';
  },

  letter():string {
    return '•';
  },

  number(props:TextListItemPrefixProps):string {
    return `${ props.index + 1 }.`;
  }
};

/**
 * Exports
*/

export function TextList(props:TextListProps) {
  /** Helpers **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container'),
    item: Tailwind.get(props.tailwind, 'item', false, false),
    prefix: Tailwind.get(props.tailwind, 'prefix', false, false),
    content: Tailwind.get(props.tailwind, 'content', false, false)
  };

  /** Renderers **/

  const renderItemPrefix = (item:TextListItem, index:number) => {
    return (
      <Text tailwind={ tailwinds.prefix }>
        { prefixes[props.prefix]({ index }) }
      </Text>
    );
  };

  const renderItemContent = (item:TextListItem, index:number) => (
    <Text tailwind={ tailwinds.content }>
      { item }
    </Text>
  );

  /** Output **/

  return (
    <View style={ props.style } tailwind={ tailwinds.container } onLayout={ props.onLayout }>
      {
        props.items.map((item:TextListItem, index:number) => (
          <View
            key={ index }
            tailwind={ tailwinds.item }
          >
            { renderItemPrefix(item, index) }
            { renderItemContent(item, index) }
          </View>
        ))
      }
    </View>
  );
}

TextList.defaultProps = {
  prefix: 'disc'
};
