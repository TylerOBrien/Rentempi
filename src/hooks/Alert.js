/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { AlertContext } from '~/providers/AlertProvider';

/**
 * Exports
*/

export function useAlert() {
  /** Contexts **/

  const { alertDataRef, alertTotalCountRef, setAlerts } = useContext(AlertContext);

  /** Add/Remove Alerts **/

  /**
   * 
   */
  const append = (alert) => {
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
  const remove = (key) => {
    delete alertDataRef.current[key];

    setAlerts(current => {
      const pivot = current.indexOf(key);

      return [].concat(
        current.slice(0, pivot), current.slice(pivot + 1)
      );
    });
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
  
  const message = (content) => {
    append({ type: 'message', content });
  };
  
  const notice = (content) => {
    append({ type: 'notice', content });
  };
  
  const warning = (content) => {
    append({ type: 'warning', content });
  };
  
  const error = (content) => {
    append({ type: 'error', content });
  };

  /** Output **/

  return {
    iterator, message, notice, warning, error
  };
}