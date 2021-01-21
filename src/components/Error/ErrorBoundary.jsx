/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Exports
*/

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    if (this.props.onError) {
      this.props.onError(error, info);
    } else {
      console.error('Uncaught ErrorBoundary Error', error, info.componentStack);
    }
  }

  render() {
    return (
      this.state.hasError
        ? this.props.fallback
        : this.props.children
    );
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.node.isRequired,
  onError: PropTypes.func
};
