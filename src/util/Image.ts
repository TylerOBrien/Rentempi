/**
 * Global Imports
*/

import { Image as ReactNativeImage, ImageResolvedAssetSource, ImageSourcePropType } from 'react-native';

/**
 * Types/Interfaces
*/

export interface ImageInfo extends ImageResolvedAssetSource {
  source: ImageSourcePropType;
  ratio: number;
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
  const resolved = ReactNativeImage.resolveAssetSource(source);
  return Object.assign(resolved, {
    source,
    ratio: resolved.width / resolved.height
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
  const image = Object.create({ source: null });

  promised.then(source => {
    const { scale, uri, width, height, ratio } = info(source['default']);

    image.source = source['default'];
    image.scale = scale;
    image.uri = uri;
    image.width = width;
    image.height = height;
    image.ratio = ratio;
  });

  return image;
}

/**
 * Exports
*/

export const Image = { info, load };
