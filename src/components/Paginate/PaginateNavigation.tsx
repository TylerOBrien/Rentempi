/**
 * Global Imports
*/

import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';
import { Tailwind, TailwindObject, TailwindEnabledProps } from '~/util/TailwindCss'

/**
 * Types/Interfaces
*/

interface SeparatorProps {
  visible: boolean;
  separator: string;
}

interface PageNumberProps {
  page: number;
  active: boolean;
  separatorLeft?: string;
  separatorRight?: string;
  tailwind?: TailwindObject;
  onPress: (page:number) => void | Promise<void>;
}

export interface PaginateNavigationProps extends TailwindEnabledProps {
  current: number;
  total: number;
  per?: number;
  separator?: string;
  onNavigate: (page:number) => void | Promise<void>;
}

/**
 * Locals
*/

function Separator(props:SeparatorProps) {
  return (
    props.visible &&
      <Text style={ styles.separator }>
        { props.separator }
      </Text>
  );
}

function PageNumber(props:PageNumberProps) {
  /** Tailwinds **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container'),
    containerActive: Tailwind.get(props.tailwind, 'containerActive'),
    containerInactive: Tailwind.get(props.tailwind, 'containerInactive'),
    text: Tailwind.get(props.tailwind, 'text'),
    textActive: Tailwind.get(props.tailwind, 'textActive'),
    textInactive: Tailwind.get(props.tailwind, 'textInactive')
  };

  /** Output **/

  return (
    <Fragment>
      <Separator
        visible={ !!props.separatorLeft }
        separator={ props.separatorLeft }
      />
      <Pressable
        tailwind={[ tailwinds.container, props.active ? tailwinds.containerActive : tailwinds.containerInactive ]}
        onPress={ () => props.onPress(props.page) }
      >
        <Text
          style={ styles.number }
          tailwind={[ tailwinds.text, props.active ? tailwinds.textActive : tailwinds.textInactive ]}
        >
          { props.page + 1 }
        </Text>
      </Pressable>
      <Separator
        visible={ !!props.separatorRight }
        separator={ props.separatorRight }
      />
    </Fragment>
  );
}

/**
 * Components
*/

export function PaginateNavigation(props:PaginateNavigationProps) {
  /** Helpers **/

  const firstPivot = Math.floor(props.per / 2);
  const lastPivot = Math.floor(props.total - (props.per / 2));
  const offset = (props.current < firstPivot) ? 0
    : (props.current < lastPivot)
      ? (props.current - firstPivot)
      : (props.total - props.per);
  
  /** Output **/
  
  return (
    <View style={ styles.container } onLayout={ props.onLayout }>
      {
        props.current > firstPivot &&
          <PageNumber
            page={ 0 }
            active={ props.current === 0 }
            separatorRight={ props.separator }
            onPress={ props.onNavigate }
          />
      }
      {
        Array.from(Array(props.per).keys())
             .map((page, index) => (
          <PageNumber
            key={ index }
            page={ page + offset }
            active={ props.current === (page + offset) }
            onPress={ props.onNavigate }
          />
        ))
      }
      {
        props.current < lastPivot &&
          <PageNumber
            page={ props.total - 1 }
            active={ props.current === (props.total - 1) }
            separatorLeft={ props.separator }
            onPress={ props.onNavigate }
          />
      }
    </View>
  );
}

PaginateNavigation.defaultProps = {
  per: 9,
  separator: '…'
};

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  number: {
    fontSize: 16
  },

  separator: {
    fontSize: 16
  }
});
