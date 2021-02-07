/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useContext, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Button } from '~/components/Button';
import { Modal } from '~/components/Modal';

/**
 * Types/Interfaces
*/

export interface ContactUsModalProps {
  visible: boolean;
  onClose: Function;
  onLayout?: (event:LayoutChangeEvent) => void;
}

/**
 * Components
*/

export function ContactUsModal(props:ContactUsModalProps) {
  return (
    <Modal visible={ props.visible } onLayout={ props.onLayout }>
      <View tailwind='w-3/4 p-8 bg-gray-200'>
        <Text tailwind='mb-8 text-center text-2xl'>Contact Us</Text>
        <Text tailwind='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut venenatis enim. Duis eu pellentesque
          risus. Proin fermentum a enim et semper. Suspendisse rutrum blandit volutpat. Nulla et ipsum dolor. In
          hendrerit dolor a pharetra ultricies. In mollis quam at sodales pharetra. Aliquam semper nulla ut risus dictum
          tincidunt. Suspendisse quis augue malesuada, dignissim felis at, dignissim ipsum. 
        </Text>
        <Button
          label='Ok'
          onPress={ props.onClose }
          tailwind={{
            container: 'self-center mt-8 px-8 py-4 rounded-full bg-gray-600',
            label: 'text-lg text-white'
          }}
        />
      </View>
    </Modal>
  );
}
