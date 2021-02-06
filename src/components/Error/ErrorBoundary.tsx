/**
 * Global Imports
*/

import React, { ErrorInfo, ReactNode } from 'react';

/**
 * Types/Interfaces
*/

export interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
  onError?: (error:Error, info:ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Components
*/

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(error:Error):ErrorBoundaryState {
    return { hasError: true };
  }

  constructor(props:ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error:Error, info:ErrorInfo) {
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
