/**
 * Global Imports
*/

import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Button, LoadButton } from '~/components/Button';
import { Text, View } from '~/components/Base';

/**
 * Sibling Imports
*/

import { Modal, ModalProps } from './Modal';

/**
 * Types/Interfaces
*/

export interface ConfirmModalProps extends ModalProps {
  title: string;
  labelCancel?: string;
  labelConfirm?: string;
  loading?: boolean;
  onConfirm: () => void | Promise<void>;
  onClose: () => void | Promise<void>;
}

/**
 * Exports
*/

export function ConfirmModal(props:ConfirmModalProps) {
  return (
    <Modal visible={ props.visible } onLayout={ props.onLayout }>
      <View style={ styles.container }>
        <View style={ styles.inner }>
          <Text style={ styles.titleContainer }>
            { props.title }
          </Text>

          { props.children }

          <View style={ styles.controls }>
            <Button
              label={ props.labelCancel || 'Cancel' }
              tailwind='mr-8 bg-gray-100'
              onPress={ props.onClose }
              disabled={ props.loading }
            />
            <LoadButton
              label={ props.labelConfirm || 'Yes, I am sure' }
              tailwind={{ container: 'ml-8 bg-green-400' }}
              loading={ props.loading }
              onPress={ props.onConfirm }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

/**
 * Styles
*/

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  titleContainer: {
    //
  },

  inner: {
    width: '75%',
    paddingTop: 21,
    paddingRight: 21,
    paddingBottom: 21,
    paddingLeft: 21
  },

  controls: {
    flexDirection: 'row',
    marginTop: 14
  }
});
