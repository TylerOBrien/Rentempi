/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { ScreenConfig } from '~/config';
import { ScrollView, Text, View } from '~/components/Base';
import { Col, Row } from '~/components/Grid';
import { TailwindEnabledProps } from '~/util/TailwindCss';

/**
 * Sibling Imports
*/



/**
 * Types/Interfaces
*/

export interface SideMenuGuestLayoutProps {
  menu: FunctionComponent;
  children: ReactNode;
}

/**
 * Exports
*/

export function SideMenuGuestLayout(props:SideMenuGuestLayoutProps) {
  return (
    <View tailwind='flex-auto bg-primary'>
      <Row tailwind='flex-auto'>
        <Col tailwind='w-1/3 bg-tertiary'>
          { React.createElement(props.menu) }
        </Col>
        <Col tailwind='flex-auto p-8'>
          { props.children }
        </Col>
      </Row>
    </View>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  inner: {
    flexGrow: 1
  },
  contentContainer: {
    width: Math.max(500, ScreenConfig.dimensions.min) - 32
  }
});
