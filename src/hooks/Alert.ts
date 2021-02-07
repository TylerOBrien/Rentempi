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
  message: ReactNode;
}

export interface AlertHook {
  alerts: Array<string>;
  iterator: AlertIterator;
  message: (content:any) => void;
  notice: (content:any) => void;
  warning: (content:any) => void;
  error: (content:any) => void;
  fromKey: (key:string) => AlertItem;
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
  const append = (alert:any) => {
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

  /** Generator **/

  const iterator = {
    *[Symbol.iterator]() {
      for (const key in alertDataRef) {
        yield Object.assign({ remove: remove.bind(this, key) }, alertDataRef[key]);
      }
    }
  };

  /** Alert Types **/
  
  const message = (content:any) => {
    append({ type: 'message', content });
  };
  
  const notice = (content:any) => {
    append({ type: 'notice', content });
  };
  
  const warning = (content:any) => {
    append({ type: 'warning', content });
  };
  
  const error = (content:any) => {
    append({ type: 'error', content });
  };

  /** Output **/

  return {
    alerts, fromKey, iterator, message, notice, warning, error
  };
}
