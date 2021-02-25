/**
 * Global Imports
*/

import { Image, ImageResolvedAssetSource, ImageSourcePropType } from 'react-native';

/**
 * Types/Interfaces
*/

export interface ImageInfo extends ImageResolvedAssetSource {
  source: ImageSourcePropType;
  whratio: number;
  hwratio: number;
}

/**
 * Locals
*/

/**
 * Resolve the image then calculate its aspect ratio before returning.
 *
 * @param {ImageSourcePropType}
 *
 * @return {ImageInfo}
 */
function info(source:ImageSourcePropType) : ImageInfo {
  const resolved = Image.resolveAssetSource(source);
  return Object.assign(resolved, {
    source,
    whratio: resolved.width / resolved.height,
    hwratio: resolved.height / resolved.width
  });
}

/**
 * Asynchronously load the image info.
 *
 * @param {Promise<any>} promised
 *
 * @return {ImageInfo}
 */
function load(promised:Promise<any>) : ImageInfo {
  const image:ImageInfo = Object.assign(Object.create(null), {
    source: null,
    scale: null,
    uri: null,
    width: null,
    height: null,
    whratio: null,
    hwratio: null
  });

  promised.then(source => {
    const { scale, uri, width, height, whratio, hwratio } = info(source['default']);

    image.source = source['default'];
    image.scale = scale;
    image.uri = uri;
    image.width = width;
    image.height = height;
    image.whratio = whratio;
    image.hwratio = hwratio;
  });

  return image;
}

/**
 * Exports
*/

export const ImageHelpers = { info, load };
