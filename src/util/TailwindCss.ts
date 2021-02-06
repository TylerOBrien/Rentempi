/**
 * Global Imports
*/

import { LayoutChangeEvent } from 'react-native';

/**
 * Resources
*/

import aliases from '@resources/tailwind/aliases.json';
import definitions from '@resources/tailwind/styles.json';

/**
 * Local Imports
*/

import { ThemeConfig } from '~/config';

/**
 * Sibling Imports
*/

import { Algorithm } from './Algorithm';
import { Assert } from './Assert';
import { JS } from './JS';

/**
 * Types/Interfaces
*/

export type StyleProp = object | Array<object>;
export type TailwindBaseProp = string | Array<string>;
export type TailwindProp = TailwindBaseProp | object;

export type TailwindClassNames = string | Array<string>;
export type TailwindObject = string | Array<string> | object;

export interface TailwindEnabledProps {
  style?: StyleProp;
  tailwind?: TailwindProp;
  onLayout?: (event:LayoutChangeEvent) => void;
};

/**
 * Local Vars
*/

const colors = {};
const fontSizeRegex = new RegExp('text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)');

/**
 * Local Functions
*/

/**
 * Applies aliases, if necessary, to the passes Tailwind class names.
 * 
 * @param {TailwindClassNames} tailwind
 * 
 * @return {string}
 */
function aliased(tailwind:TailwindClassNames):string {
  if (JS.isArray(tailwind)) {
    tailwind = Algorithm.truthies(tailwind).join(' ').split(' ');
  } else {
    tailwind = tailwind.split(' ');
  }

  let i = tailwind.length;

  while (i--) {
    if (tailwind[i] in aliases) {
      tailwind[i] = aliases[tailwind[i]];
    }
  }

  return tailwind.join(' ');
}

/**
 * Returns true if the passed Tailwind name beings with tracking- which is
 * used to change the text-spacing style.
 * 
 * @param {string} entry
 * 
 * @return {boolean}
 */
function hasTrackingPrefix(entry:string):boolean {
  return (
    entry.length > 8 &&
    entry[0] === 't' && entry[1] === 'r' && entry[2] === 'a' &&
    entry[3] === 'c' && entry[4] === 'k' && entry[5] === 'i' &&
    entry[6] === 'n' && entry[7] === 'g' && entry[8] === '-'
  );
}

/**
 * Tailwind
*/

/**
 * Converts the given Tailwind-style class name to a React Native style object.
 * 
 * @param {string} className
 * @param {RegExpExecArray} fontSizes
 * 
 * @return {object}
 */
function parse(className:string, fontSizes?:RegExpExecArray):object {
  if (!className) {
    Assert.ThrowUnexpectedEmptyError('className', 'string');
  }

  const style = { letterSpacing: undefined };
  const entries = className.split(' ');

  let end = entries.length;
  let hasVariables = false;

  while (end--) {
    const key = entries[end];
    const defined = definitions[key];

    if (!defined) {
      console.warn(`Unsupported Tailwind class: '${ key }'`);
    }

    if (!hasVariables && key.length > 2 && key[0] !== '-' && key[1] !== '-') {
      if (JS.isString(defined) && defined.length > 20) {
        hasVariables = true;
      }
    }

    if (!hasTrackingPrefix(key)) {
      Object.assign(style, defined);
    } else {
      if (!fontSizes) {
        fontSizes = fontSizeRegex.exec(className);
        if (!fontSizes) {
          console.warn('Font size is required when applying letter spacing, e.g. text-lg tracking-tighter');
        }
      }
      
      style.letterSpacing = ( defined * definitions[fontSizes[0]] );
    }
  }

  if (!hasVariables) {
    return style;
  }

  for (const key in style) {
    if (key.length < 3 || ( key[0] === '-' && key[1] === '-' )) {
      continue;
    }

    const entry = style[key];

    if (!JS.isString(entry) || entry.length < 20) {
      continue;
    }

    const pivot = entry.lastIndexOf('var(');

    if (pivot !== -1) {
      const variable = entry.slice(pivot, -1);
      const name = variable.slice(4, -1);
      
      style[key] = entry.replace(variable, style[name]);
    }
  }

  return style;
}

/**
 * Converts the passed color name to its associated color code.
 * 
 * @param {string} colorName
 * 
 * @return {string}
 */
function color(colorName:string):string {
  if (!colorName) {
    Assert.ThrowUnexpectedEmptyError('colorName', 'string');
  }

  return colors[colorName] || (() => {
    let parsed:any;
    const entries:Array<string> = colorName.split(' ');

    entries[0] = ( 'bg-' + entries[0] );

    if (entries.length === 1) {
      parsed = parse(entries[0]);
    } else {
      entries[1] = ( 'bg-' + entries[1] );
      parsed = parse(entries[0] + ' ' + entries[1]);
    }

    colors[colorName] = parsed.backgroundColor;

    return parsed.backgroundColor;
  })();
}

/**
 * Gets the child Tailwind object of the passed Tailwind object.
 * 
 * If the passed param is not a Tailwind object then it will be assumed to be a
 * class string or an array of class strings and/or Tailwind objects.
 * 
 * @param {TailwindClassNames} props
 * @param {string} group
 * @param {boolean} fallbackOnString
 * @param {boolean} fallbackOnArray
 * @param {any} fallbackTailwind
 * 
 * @return {any}
 */
function get(tailwind:TailwindClassNames, group:string=ThemeConfig.defaults.group.name, fallbackOnString:boolean=true, fallbackOnArray:boolean=true, fallbackTailwind?:any):any {
  if (JS.isString(tailwind)) {
    return fallbackOnString ? tailwind || fallbackTailwind : undefined;
  } else if (JS.isArray(tailwind)) {
    return fallbackOnArray ? tailwind || fallbackTailwind : undefined;
  } else {
    return ( tailwind && tailwind[group] ) || fallbackTailwind;
  }
}

/**
 * Merges the extension with the tailwind object. This is roughly equivalent to
 * spreading two Tailwind objects one after another into a new one.
 * 
 * @param {TailwindObject} tailwind
 * @param {any} extension
 * @param {string} fallbackGroup
 * 
 * @return {object}
 */
function merge(tailwind:TailwindObject, extension:any, fallbackGroup:string=ThemeConfig.defaults.group.name):object {
  if (JS.isString(tailwind)) {
    tailwind = { [fallbackGroup]: tailwind };
  }

  const newTailwind = Object.assign({}, tailwind);

  for (const key in extension) {
    Object.assign(newTailwind[key], extension[key]);
  }

  return newTailwind;
}

/**
 * 
 * 
 * @param {any} properties
 * 
 * @return {any}
 */
function props(properties:any):any {
  if (!properties.tailwind) {
    return properties;
  }
  
  const parsed = parse(aliased(properties.tailwind));

  if (!properties.style) {
    return Object.assign({}, properties, { style: parsed, tailwind: undefined });
  }

  return Object.assign({}, properties, {
    style: Object.assign(parsed, properties.style),
    tailwind: undefined
  });
}

/**
 * 
 * 
 * @param {object} props
 * 
 * @return {object}
 */
function style(props:any):any {
  return props.style && Object.assign({}, props.style);
};

/**
 * Namespaced Exports
*/

export const Tailwind = { parse, color, get, merge, props, style };
