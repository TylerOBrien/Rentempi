/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { Button, LoadingButton } from '~/components/Button';
import { Text, View } from '~/components/Base';

import { Modal } from './Modal';

/**
 * Exports
*/

/**
 * 
 */
export function ConfirmModal(props) {
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
              label='Cancel'
              tailwind='mr-8 bg-gray-100'
              onPress={ props.onClose }
              disabled={ props.loading }
            />
            <LoadingButton
              label='Yes, I am sure'
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

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,

  loading: PropTypes.bool,
  visible: PropTypes.bool,

  onLayout: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

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