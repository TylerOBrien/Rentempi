/**
 * Global Imports
*/

import { ReactNode, useContext } from 'react';

/**
 * Local Imports
*/

import { AlertContext } from '~/providers/AlertProvider';

/**
 * Types/Interfaces
*/

export type AlertIterator = {
  [Symbol.iterator]: () => Generator<any, void, unknown>;
}

export type AlertItem = {
  type: string;
  value: string;
  when?: Date;
}

export interface AlertHook {
  alerts: Array<string>;
  fromKey: (key:string) => AlertItem;
  message: (value:string) => void;
  notice: (value:string) => void;
  warning: (value:string) => void;
  error: (value:string) => void;
}

/**
 * Exports
*/

export function useAlert():AlertHook {
  /** Contexts **/

  const { alerts, setAlerts, alertDataRef, alertTotalCountRef } = useContext(AlertContext);

  /** Add/Remove Alerts **/

  /**
   * 
   */
  const append = (alert:AlertItem) => {
    alert.when = new Date;

    if (!alertDataRef.current) {
      alertDataRef.current = {};
      alertTotalCountRef.current = 0;
    }

    alertDataRef.current[alertTotalCountRef.current] = alert;

    setAlerts(current =>
      current
        ? [].concat(current, '' + alertTotalCountRef.current++)
        : [ '' + alertTotalCountRef.current++ ]
    );
  };

  /**
   * 
   */
  const remove = (key:string) => {
    delete alertDataRef.current[key];

    setAlerts(current => {
      const pivot = current.indexOf(key);

      return [].concat(
        current.slice(0, pivot), current.slice(pivot + 1)
      );
    });
  };

  const fromKey = (key:string):AlertItem => {
    return alertDataRef.current[key];
  };

  /** Alert Types **/
  
  const message = (value:string) => {
    append({ type: 'message', value });
  };
  
  const notice = (value:string) => {
    append({ type: 'notice', value });
  };
  
  const warning = (value:string) => {
    append({ type: 'warning', value });
  };
  
  const error = (value:string) => {
    append({ type: 'error', value });
  };

  /** Output **/

  return {
    alerts, fromKey, message, notice, warning, error
  };
}
