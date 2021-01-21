/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Tailwind } from '~/util/TailwindCss';

/**
 * Exports
*/

/**
 * 
 */
export function ItemList(props) {
  /** Renderers **/

  /**
   * 
   */
  const renderNumberItemPrefix = (item, index) => {
    return `${ index + 1 }. `;
  };

  /**
   * 
   */
  const renderDiscItemPrefix = (item, index) => {
    return '•';
  };

  /**
   * 
   */
  const renderItemPrefix = (item, index) => {
    return (
      <Text tailwind={ Tailwind.get(props.tailwind, 'prefix', false) }>
        {
          !props.prefix ? null
            : props.prefix === 'number' ? renderNumberItemPrefix(item, index)
            : props.prefix === 'letter' ? renderDiscItemPrefix(item, index)
            : props.prefix === 'disc'   ? renderDiscItemPrefix(item, index)
            : null
        }
      </Text>
    );
  };

  /**
   * 
   */
  const renderItemContent = (item, index) => (
    <Text
      style={{  }}
      tailwind={ Tailwind.get(props.tailwind, 'label', false) }
    >
      { item }
    </Text>
  );

  /** Output **/

  return (
    <props.container
      style={{  }}
      tailwind={ Tailwind.get(props.tailwind, 'container') }
    >
      {
        props.items.map((item, index) => (
          <props.itemContainer
            key={ index }
            style={{  }}
            tailwind={[ 'flex-row', Tailwind.get(props.tailwind, 'item', false) ]}
          >
            { renderItemPrefix(item, index) }
            { renderItemContent(item, index) }
          </props.itemContainer>
        ))
      }
    </props.container>
  );
}

ItemList.propTypes = {
  prefix: PropTypes.oneOf([ 'number', 'disc', 'letter' ]),

  container: PropTypes.func,
  containerProps: PropTypes.object,

  itemContainer: PropTypes.func,
  itemContainerProps: PropTypes.object
};

ItemList.defaultProps = {
  prefix: 'disc',
  container: View,
  itemContainer: View
};