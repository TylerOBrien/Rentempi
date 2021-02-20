/**
 * Global Imports
*/

import { LayoutChangeEvent, StyleSheet } from 'react-native';

/**
 * Resources
*/

import aliases from '@resources/tailwind/aliases.json';
import definitions from '@resources/tailwind/styles.json';

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
}

/**
 * Local Vars
*/

const colors = {};
const tailwinds = {};
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
    tailwind = Algorithm.truthies(<Array<string>>tailwind).join(' ').split(' ');
  } else {
    tailwind = (<string>tailwind).split(' ');
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
    return;
  }

  if (className in tailwinds) {
    return Object.assign({}, tailwinds[className]);
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

    if (!hasVariables) {
      for (const name in defined) {
        if (key.length > 2 && name[0] === '-' && name[1] === '-') {
          hasVariables = true;
          break;
        }
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

  for (const key in style) {
    if (key.length > 3 && ( key[0] !== '-' && key[1] !== '-' )) {
      continue;
    }

    delete style[key];
  }

  if ('letterSpacing' in style) {
    delete style.letterSpacing;
  }

  return tailwinds[className] = style;
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
 * Gets the named child Tailwind object.
 * 
 * If the passed param is not a Tailwind object then it will be assumed to be a
 * className string or an array of className strings.
 * 
 * @param {TailwindObject} tailwind
 * @param {string} name
 * @param {TailwindClassNames} fallback
 * 
 * @return {TailwindObject}
 */
function get(tailwind:TailwindObject, name:string = 'container', fallback:TailwindClassNames = undefined):TailwindClassNames {
  if (typeof tailwind === 'string' || Array.isArray(tailwind)) {
    return tailwind || fallback;
  }

  return name in tailwind ? tailwind[name] : fallback;
}

/**
 * Merges the extension with the tailwind object. This is roughly equivalent to
 * spreading two Tailwind objects one after another into a new one.
 * 
 * @param {TailwindObject} tailwind
 * @param {object} extension
 * @param {string} fallbackGroup
 * 
 * @return {object}
 */
function merge(tailwind:TailwindObject, extension:object, fallbackGroup:string='container'):object {
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
  
  const parsed = parse(aliased(
    Array.isArray(properties.tailwind)
      ? Algorithm.truthies<string>(properties.tailwind).join(' ')
      : properties.tailwind
  ));

  if (!parsed) {
    return properties;
  }

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
