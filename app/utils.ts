// Consolidating various items here for the sake of the demo
import { ImgurAlbum } from './types'

export const TRANSITION_TIME_MS = 500

/*
 * Filters out images that don't match the desired extensions
 * @param albums - Array of ImgurAlbum objects
 * @returns Array of ImgurAlbum objects with the filtered images
 */
export const filterImgurAlbumImagesByExtension = (albums: ImgurAlbum[] = []) => {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif']

  return albums.reduce((acc, album) => {
    const filteredImages = album.images.filter((image) =>
      validExtensions.some((ext) => image.link.toLowerCase().endsWith(ext))
    )

    if (filteredImages.length > 0) {
      acc.push({ ...album, images: filteredImages })
    }

    return acc
  }, [] as ImgurAlbum[])
}

/*
 * Filters out images that don't match the desired extensions
 * @param images - Array of images
 * @returns Array of images with the filtered images
 */
export const filterImagesByExtension = (images: ImgurAlbum['images'] = []) => {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif']

  return images.filter((image) =>
    validExtensions.some((ext) => image.link.toLowerCase().endsWith(ext))
  )
}
