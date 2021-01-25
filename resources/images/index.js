/**
 * Global Imports
*/

import { Image } from 'react-native';

/**
 * Local Imports
*/

import LogoPng from './Logo.png';

/**
 * Locals
*/

function imageInfo(image) {
  const info = Image.resolveAssetSource(image);
  info.aspectRatio = info.width / info.height;
  return info;
}

function imageExport(source) {
  return Object.assign({}, source, imageInfo(source));
}

/**
 * Exports
*/

export const Logo = imageExport(LogoPng);
