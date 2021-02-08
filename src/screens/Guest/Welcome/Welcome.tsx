/**
 * Global Imports
*/

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { WelcomeGuestLayout } from '~/layouts/Guest';

/**
 * Sibling Imports
*/

import { AuthLinks, Greeting, HelpLinks, ContactUsModal } from './components';

/**
 * Types/Interfaces
*/

export interface WelcomeProps {
  //
}

/**
 * Exports
*/

export function Welcome(props:WelcomeProps) {
  /** States **/

  const [ isContactUsModalVisible, setIsContactUsModalVisible ] = useState<boolean>();

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleContactUs = ():void => {
    setIsContactUsModalVisible(true);
  };

  /**
   * @return {void}
   */
  const handleCloseContactUsModal = ():void => {
    setIsContactUsModalVisible(false);
  };

  /** Output **/

  return (
    <WelcomeGuestLayout>
      <View style={ styles.top }>
        <Greeting />
        <AuthLinks />
      </View>
      <HelpLinks onPressContactUs={ handleContactUs } />
      <ContactUsModal
        visible={ isContactUsModalVisible }
        onClose={ handleCloseContactUsModal }
      />
    </WelcomeGuestLayout>
  );
}

export const WelcomeConfig = {
  stack: {
    name: 'Welcome',
    component: Welcome,
    options: {
      headerShown: false
    }
  }
};

/** Styles **/

const styles = StyleSheet.create({
  top: {
    flex: 1
  }
});
