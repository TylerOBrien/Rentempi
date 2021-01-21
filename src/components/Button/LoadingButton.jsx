/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

/**
 * Local Imports
*/

import { Button } from './Button';

/**
 * Exports
*/

/**
 * 
 */
export function LoadingButton(props) {
  /** States **/
  
  const [ isLoading, setIsLoading ] = useState(false);
  
  /** Side-Effects **/
  
  useEffect(() => {
    if (isLoading) {
      props.onPress();
      setIsLoading(false);
    }
  }, [ isLoading ]);
  
  /** Output **/
  
  return (
    <Button
      label={ props.label }
      loading={ isLoading || props.loading }
      disabled={ isLoading || props.loading || props.disabled }
      onLayout={ props.onLayout }
      onPress={ () => setIsLoading(true) }
      tailwind={{
        container: [ props.disabled && props.disabledTailwind?.container, props.tailwind?.container ],
        label: [ props.disabled && props.disabledTailwind?.label, props.tailwind?.label ]
      }}
    />
  );
}

LoadingButton.propTypes = {
  label: PropTypes.string.isRequired,

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.array ]),

  loading: PropTypes.bool,
  disabled: PropTypes.bool,

  onLayout: PropTypes.func,
  onPress: PropTypes.func.isRequired
};