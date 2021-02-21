/**
 * Global Imports
*/

import { ColorValue, StatusBarStyle, StyleSheet } from 'react-native';
import { Position } from 'react-native-flash-message';

/**
 * Local Imports
*/

import { Tailwind } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ThemeColors {
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  success: ColorValue;
  fail: ColorValue;
  warning: ColorValue;
  error: ColorValue;
  info: ColorValue;
  notice: ColorValue;
  message: ColorValue;
}

export interface ThemeDefaults {
  statusBarStyle: StatusBarStyle;
  flashMessagePosition: Position;
  group: {
    name: string;
  };
}

/**
 * Locals
*/

const tailwind = {
  button: {
    container: 'flex-initial justify-center rounded-full',
    label: 'py-3 px-12 text-center text-white text-base'
  },
  input: {
    target: 'text-base pl-2',
    label: 'pl-2'
  },
  text: {

  },
  modal: {
    
  }
};

const style = StyleSheet.create({
  button: {

  },
  text: {

  },
  modal: {

  }
});

const color:ThemeColors = {
  primary: Tailwind.color('primary'),
  secondary: Tailwind.color('secondary'),
  tertiary: Tailwind.color('tertiary'),
  success: Tailwind.color('success'),
  fail: Tailwind.color('fail'),
  warning: Tailwind.color('warning'),
  error: Tailwind.color('error'),
  info: Tailwind.color('info'),
  notice: Tailwind.color('notice'),
  message: Tailwind.color('message')
};

const defaults:ThemeDefaults = {
  statusBarStyle: 'light-content',
  flashMessagePosition: 'top',
  group: {
    name: 'container'
  }
};

/**
 * Namespaced Exports
*/

export const ThemeConfig = { tailwind, style, color, defaults };
