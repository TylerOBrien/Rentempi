/**
 * Global Imports
*/

import { Image } from 'react-native';

/**
 * Local Imports
*/

import StepsInsituLogoPng from './StepsInsituLogo.png';
import SwooshPng from './Swoosh.png';

/**
 * Locals
*/

/**
 * 
 */
function imageInfo(image) {
  const info = Image.resolveAssetSource(image);
  info.aspectRatio = info.width / info.height;
  return info;
}

/**
 * 
 */
function imageExport(source) {
  return { source, ...imageInfo(source) };
}

/**
 * Exports
*/

export const Logo = imageExport(StepsInsituLogoPng);
export const Swoosh = imageExport(SwooshPng);