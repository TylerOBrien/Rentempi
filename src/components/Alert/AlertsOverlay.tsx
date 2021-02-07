/**
 * Global Imports
*/

import React, { Fragment } from 'react';

/**
 * Local Imports
*/

import { useAlerter } from '~/hooks';

/**
 * Sibling Imports
*/

import { Alert } from './Alert';

/**
 * Components
*/

export function AlertsOverlay() {
  /** Hooks **/

  const alerter = useAlerter();

  /** Output **/
  
  return (
    <Fragment>
      {
        (alerter.alerts || []).map((item, index) => (
          <Alert
            key={ index }
            { ...alerter.fromKey(item) }
          />
        ))
      }
    </Fragment>
  );
}
