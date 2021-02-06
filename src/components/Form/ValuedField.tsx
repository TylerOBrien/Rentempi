/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';

/**
 * Local Imports
*/

import { TextInput } from '~/components/Base';

/**
 * Exports
*/

export function ValuedField(props) {
  /** Contexts **/

  const formik = props.formik ? useFormikContext() : null;

  /** States **/

  const [ value, setValue ] = useState(props.initialValue || '');

  /** Side-Effects **/

  useEffect(() => {
    handleValueStateChange();
  }, [ !formik ? value : formik.values[props.name] ]);

  useEffect(() => {
    if (!formik) {
      setValue((props.value ?? '').toString());
    }
  }, [ props.value ]);

  /** Event Handlers **/

  /**
   * 
   */
  const handleValueStateChange = () => {
    if (props.onChangeValue) {
      props.onChangeValue(value);
    }
  };

  /**
   * 
   */
  const handleChange = (newValue) => {
    if (formik) {
      formik.setFieldValue(props.name, newValue);
    } else {
      setValue(newValue);
    }
  };

  /**
   * 
   */
  const handleBlur = (touched) => {
    if (formik) {
      formik.setFieldTouched(props.name, touched);
    }
  };

  /**
   * 
   */
  const handleRenderChildren = (field, children) => {
    return React.Children.map(
      children, handleRenderChild.bind(this, field)
    );
  };
  
  /**
   * 
   */
  const handleRenderChild = (field, child) => {
    if (!child) {
      return null;
    }

    if ([TextInput].includes(child.type)) {
      return React.cloneElement(child, {
        name: field.name,
        value: field.value,
        onChangeText: handleChange,
        onEndEditing: props.onEndEditing,
        onBlur: handleBlur
      });
    } else if (child.props && child.props.children) {
      return React.cloneElement(child, {
        ...child.props,
        children: handleRenderChildren(field, child.props.children)
      });
    }

    return child;
  };

  /** Renderers **/

  /**
   * 
   */
  const renderField = ({ field }) => {
    return handleRenderChildren(field, props.children);
  };

  /**
   * 
   */
  const renderFormik = () => (
    <Field name={ props.name }>
      { renderField }
    </Field>
  );

  /**
   * 
   */
  const renderContent = () => (
    formik ? renderFormik() : renderField({ field: { name: props.name, value } })
  );

  /**
   * 
   */
  const renderContainer = () => {
    const config = {
      style: props.style,
      tailwind: [ 'relative', Tailwind.get(props.tailwind, 'container') ],
      children: renderContent()
    };

    return typeof props.container === 'function'
      ? React.createElement(props.container, config)
      : React.cloneElement(props.container, config);
  };

  /** Output **/

  return props.container ? renderContainer() : renderContent();
}

ValuedField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.PropTypes.string,

  initialValue: PropTypes.PropTypes.string,

  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  tailwind: PropTypes.oneOfType([ PropTypes.string, PropTypes.array, PropTypes.object ]),

  container: PropTypes.oneOfType([ PropTypes.func, PropTypes.node, PropTypes.symbol ]),
  formik: PropTypes.bool,

  onChange: PropTypes.func,
  onChangeValue: PropTypes.func
};

ValuedField.defaultProps = {
  formik: true
};
