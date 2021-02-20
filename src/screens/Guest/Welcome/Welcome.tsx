/**
 * Global Imports
*/

import React, { useState } from 'react';

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
      <View tailwind='flex-auto'>
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
