/**
 * Global Imports
*/

import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { ScrollView, Text, View } from '~/components/Base';
import { Divider } from '~/components/Divider';

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
        <Divider
          label='Why Register?'
          tailwind={{
            container: 'mb-0',
            line: 'bg-white',
            label: 'text-white'
          }}
        />

        <Text tailwind='mt-8 text-base text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus ornare placerat. Suspendisse
          potenti. Duis ut ornare diam. Suspendisse luctus mollis orci. Praesent fringilla.
        </Text>

        <Divider
          label='Perks'
          tailwind={{
            container: 'mt-8',
            line: 'bg-white',
            label: 'text-white'
          }}
        />

        <Text tailwind='mt-8 text-base text-white'>
          Eget tortor luctus congue. Praesent eget elementum est, quis ullamcorper urna. Maecenas id magna nec purus
          vulputate pharetra. Suspendisse lacinia odio ut sem porta, ut ornare lectus sodales. Sed sit amet lectus a
          sem tincidunt pellentesque eget id elit.
        </Text>

        <Divider
          label='Pricing'
          tailwind={{
            container: 'mt-8',
            line: 'bg-white',
            label: 'text-white'
          }}
        />

        <Text tailwind='mt-8 text-base text-white'>
          Praesent eget elementum est, quis ullamcorper urna. Maecenas id magna nec purus vulputate pharetra.
          Suspendisse lacinia odio ut sem porta, ut ornare lectus sodales. Sed sit amet lectus a sem tincidun
          pellentesque eget id elit.
        </Text>
      </View>
    </ScrollView>
  );
}
