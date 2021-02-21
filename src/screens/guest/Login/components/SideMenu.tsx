/**
 * Global Imports
*/

import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { ScrollView, Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface SideMenuProps {
  //
}

/**
 * Components
*/

export function SideMenu(props:SideMenuProps) {
  return (
    <ScrollView>
      <View tailwind='p-8'>
        <View tailwind='items-center'>
          <FaIcon
            name='user'
            color='white'
            size={ 64 }
          />
          <Text tailwind='text-xl text-white'>
            Welcome back!
          </Text>
        </View>
        <Text tailwind='mt-8 text-base text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus ornare placerat. Suspendisse
          potenti. Duis ut ornare diam. Suspendisse luctus mollis orci. Praesent fringilla.
        </Text>
        <Text tailwind='mt-8 text-base text-white'>
          Eget tortor luctus congue. Praesent eget elementum est, quis ullamcorper urna. Maecenas id magna nec purus
          vulputate pharetra. Suspendisse lacinia odio ut sem porta, ut ornare lectus sodales. Sed sit amet lectus a
          sem tincidunt pellentesque eget id elit.
        </Text>
        <Text tailwind='mt-8 text-base text-white'>
          Praesent eget elementum est, quis ullamcorper urna. Maecenas id magna nec purus vulputate pharetra.
          Suspendisse lacinia odio ut sem porta, ut ornare lectus sodales. Sed sit amet lectus a sem tincidun
          pellentesque eget id elit.
        </Text>
      </View>
    </ScrollView>
  );
}
