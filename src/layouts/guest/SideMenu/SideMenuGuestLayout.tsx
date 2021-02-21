/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Col, Row } from '~/components/Grid';

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
        <Col tailwind='flex-auto'>
          <View tailwind='m-8 rounded-2xl border-2 border-secondary'>
            <View tailwind='p-8 rounded-2xl border-2 border-tertiary bg-white'>
              { props.children }
            </View>
          </View>
        </Col>
      </Row>
    </View>
  );
}
