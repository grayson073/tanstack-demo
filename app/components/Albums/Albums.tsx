import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ImgurAlbum } from '../../types'
import { AlbumImage, GridContainer, GridItemContainer } from './Albums.styled'

type AlbumProps = {
  albums: ImgurAlbum[]
}

export const Albums = ({ albums }: AlbumProps) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!albums?.length) {
      setLoadedImages([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const imageUrls = albums.map((album) => album.images[0].link)

    const loadImages = async () => {
      try {
        const imagePromises = imageUrls.map(
          (url) =>
            new Promise<string>((resolve, reject) => {
              const img = new Image()
              img.onload = () => resolve(url)
              img.onerror = () => reject(url)
              img.src = url
            })
        )

        const loaded = await Promise.all(imagePromises)
        setLoadedImages(loaded)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading images:', error)
        setIsLoading(false)
      }
    }

    loadImages()
  }, [albums])

  if (!albums) return null

  return (
    <GridContainer isLoading={isLoading}>
      {albums.map((album) => (
        <Link to='/albums/$albumId' key={album.id} params={{ albumId: album.id }}>
          <GridItemContainer key={album.id} isLoading={loadedImages.includes(album.cover)}>
            <AlbumImage src={album.images[0].link} alt={album.title || 'Album image'} />
          </GridItemContainer>
        </Link>
      ))}
    </GridContainer>
  )
}
