/**
 * Global Imports
*/

import React, { useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';
import { PrimaryIdentifiedLayout } from '~/layouts/Identified';

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
    <PrimaryIdentifiedLayout>
      <Text>This is the lobby.</Text>
    </PrimaryIdentifiedLayout>
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
