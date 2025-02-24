// Consolidating various items here for the sake of the demo
import { ImgurAlbum } from './types'

// Constants
export const TRANSITION_TIME_MS = 500
export const BASE_URL = '/api'
export const ALBUMS = `${BASE_URL}/albums`

// Helper Functions
/*
 * Filters out images that don't match the desired extensions
 * @param albums - Array of ImgurAlbum objects
 * @returns Array of ImgurAlbum objects with the filtered images
 */
export const filterImagesByExtension = (albums: ImgurAlbum[]) => {
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
