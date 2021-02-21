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
 * Sibling Imports
*/

import { Algorithm } from './Algorithm';

/**
 * Types/Interfaces
*/

interface ParsedColor {
  backgroundColor?: string;
}

export type StyleProp = object | Array<object>;
export type TailwindBaseProp = string | Array<string>;
export type TailwindProp = TailwindBaseProp | object;

export type TailwindClassNames = string | Array<string> | Array<TailwindClassNames>;
export type TailwindObject = TailwindClassNames | object;

export interface TailwindProps {
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
 * Applies aliases to the passed Tailwind class names.
 * 
 * @param {TailwindClassNames} tailwind
 * 
 * @return {string}
 */
function aliased(tailwind:TailwindClassNames):string {
  if (Array.isArray(tailwind)) {
    tailwind = Algorithm.truthies(tailwind as Array<string>).join(' ');
  }

  const classNames = (tailwind as string).split(' ');
  let i = classNames.length;

  while (i--) {
    if (classNames[i] in aliases) {
      classNames[i] = aliases[classNames[i]];
    }
  }

  return classNames.join(' ');
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
  } else if (className in tailwinds) {
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
      continue;
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

    if (typeof entry !== 'string' || entry.length < 20) {
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
  if (colorName in colors) {
    return colors[colorName];
  }

  let parsed:ParsedColor;
  const entries:Array<string> = colorName.split(' ');

  entries[0] = ( 'bg-' + entries[0] );

  if (entries.length === 1) {
    parsed = parse(entries[0]);
  } else {
    parsed = parse(entries[0] + ' ' + ( 'bg-' + entries[1] ));
  }

  return colors[colorName] = parsed.backgroundColor;
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

  return tailwind && name in tailwind ? tailwind[name] : fallback;
}

/**
 * 
 * 
 * @param {TailwindObject} tailwind
 * @param {Array<string>} names
 * @param {string} primary
 * 
 * @return {object}
 */
function getAll(tailwind:TailwindObject, names:Array<string> = [], primary:string = 'container'):object {
  const tailwinds = {};

  if (typeof tailwind === 'object') {
    for (const name of names) {
      tailwinds[name] = get(tailwind, name);
    }
  } else {
    tailwinds[primary] = tailwind;
  }

  return tailwinds;
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
function merge(tailwind:TailwindObject, extension:object, fallbackGroup:string = 'container'):object {
  if (typeof tailwind === 'string') {
    tailwind = { [fallbackGroup]: tailwind };
  }

  const newTailwind = Object.assign({}, tailwind);

  for (const key in extension) {
    if (typeof extension[key] === 'object') {
      Object.assign(newTailwind[key], extension[key]);
    }
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
  } else if (!properties.style) {
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

export const Tailwind = { parse, color, get, getAll, merge, props, style };
