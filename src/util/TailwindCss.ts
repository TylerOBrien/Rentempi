/**
 * Resources
*/

import aliases from '@resources/tailwind/aliases.json';
import definitions from '@resources/tailwind/styles.json';

/**
 * Sibling Imports
*/

import { truthies } from './Helpers';
import { JS } from './JS';

/**
 * Local Vars
*/

const colors = {};
const fontSizeRegex = new RegExp('text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)');

/**
 * Local Functions
*/

/**
 * @param {array|string} tailwind
 * 
 * @return {string}
 */
function aliased(tailwind) {
  if (JS.isArray(tailwind)) {
    tailwind = truthies(tailwind).join(' ').split(' ');
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
 * @param {string} entry
 * 
 * @return {boolean}
 */
function hasTrackingPrefix(entry) {
  return (
    entry.length > 8 &&
    entry[0] === 't' &&
    entry[1] === 'r' &&
    entry[2] === 'a' &&
    entry[3] === 'c' &&
    entry[4] === 'k' &&
    entry[5] === 'i' &&
    entry[6] === 'n' &&
    entry[7] === 'g' &&
    entry[8] === '-'
  );
}

/**
 * Tailwind
*/

/**
 * @param {string} className
 * @param {array} fontSizes
 * 
 * @return {object}
 */
function parse(className, fontSizes=undefined) {
  if (!JS.isString(className)) {
    throw new Error(`Passed className is ${ typeof className } but expected a string`);
  }

  if (!className.length) {
    throw new Error('Passed className string is empty');
  }

  const style = {};
  const entries = className.split(' ');

  let end = entries.length;
  let hasVariables = false;

  while (end--) {
    const key = entries[end];
    const defined = definitions[key];

    if (!defined) {
      throw new Error(`Unsupported Tailwind class: '${ key }'`);
    }

    if (!hasVariables && key.length > 2 && key[0] !== '-' && key[1] !== '-') {
      if (JS.isString(defined) && defined.length > 20) {
        hasVariables = true;
      }
    }

    if (!hasTrackingPrefix(key)) {
      Object.assign(style, defined);
    } else {
      if (fontSizes === undefined) {
        fontSizes = fontSizeRegex.exec(className);
        if (!fontSizes) {
          throw new Error('Font size is required when applying letter spacing, e.g. text-lg tracking-tighter');
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
function color(colorName) {
  if (!JS.isString(colorName)) {
    throw new Error(`Passed colorName is ${ typeof colorName } but expected a string`);
  }

  if (!colorName.length) {
    throw new Error('Passed colorName string is empty');
  }

  return colors[colorName] || (() => {
    let parsed;
    const entries = colorName.split(' ');

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
 * @param {object} props
 * @param {string} group
 * @param {boolean} fallbackOnString
 * @param {boolean} fallbackOnArray
 * @param {object} fallbackTailwind
 * 
 * @return {object}
 */
function get(tailwind, group=ThemeConfig.defaults.group.name, fallbackOnString=true, fallbackOnArray=true, fallbackTailwind=undefined) {
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
 * spreading two objects one after another into a new object.
 * 
 * @param {object} tailwind
 * @param {string} group
 * @param {string} fallbackGroup
 * 
 * @return {object}
 */
function merge(tailwind, extension, fallbackGroup=ThemeConfig.defaults.group.name) {
  if (!tailwind) {
    throw new Error;
  }

  if (!extension) {
    throw new Error;
  }

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
 * @param {object} properties
 * 
 * @return {object}
 */
function props(properties) {
  if (!properties.tailwind) {
    return properties;
  }
  
  const parsed = parse(aliased(properties.tailwind));

  if (!properties.style) {
    return Object.assign(properties, { style: parsed, tailwind: undefined });
  }

  return Object.assign(properties, {
    style: Object.assign({ style: parsed }, properties.style),
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
const style = (props) => {
  return props.style && Object.assign(props.style);
};

/**
 * Namespaced Exports
*/

export const Tailwind = { parse, color, get, merge, props, style };
