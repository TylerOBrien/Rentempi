/**
 * Global Imports
*/

import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { useAlert } from '~/hooks';

/**
 * Sibling Imports
*/

import { Alert } from './Alert';

/**
 * Components
*/

export function AlertsOverlay() {
  /** Hooks **/

  const alert = useAlert();

  /** Output **/
  
  return (
    <Fragment>
      {
        (alert.alerts || []).map((item, index) => (
          <Alert
            key={ index }
            item={ alert.fromKey(item) }
          />
        ))
      }
    </Fragment>
  );
}
