/**
 * Local Imports
*/

import { ScreenDriver } from '~/system/Screen';

/**
 * Exports
*/

export const ScreenConfig = {
  guest: {
    Welcome: 'Welcome',
    Login: 'Login',
    Register: 'Register',
    ForgotPassword: 'Forgot Password',
    ChangePassword: 'Change Password'
  },

  undentified: {
    Identify: 'Identify',
    VerifyEmail: 'VerifyEmail',
    VerifyMobile: 'VerifyMobile'
  },

  identified: {
    Lobby: 'Lobby'
  },

  initial: {
    guest: 'Welcome',
    undentified: 'Identify',
    identified: 'Lobby'
  },

  breakpoints: {
    sm: 400,
    md: 700,
    lg: 1000,
    xl: 1300
  },

  dimensions: ScreenDriver.dimensions()
};
