/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';
import { PrimaryVerifiedLayout } from '~/layouts/Verified';

/**
 * Types/Interfaces
*/

export interface LobbyProps {
  //
}

/**
 * Components
*/

export function Lobby(props:LobbyProps) {
  /** Hooks **/
  
  const navigation = useNavigation();
  
  /** Output **/
  
  return (
    <PrimaryVerifiedLayout>
      <Text>This is the lobby.</Text>
    </PrimaryVerifiedLayout>
  );
}

export const LobbyConfig = {
  stack: {
    name: 'Lobby',
    component: Lobby,
    options: {
      headerShown: false
    }
  }
};
