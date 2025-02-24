import { useQuery } from '@tanstack/react-query'
import { albumsApi } from '../../api/utils'
import { Route } from '../../routes/albums/$albumId/images/$imageId'
import { ImgurImage } from '../../types'
import { CenteredSpinner } from '../LoadingSpinners/CircularProgress'
import { AlbumImageContainer, FullScreenImage, ImageDescription } from './Albums.styled'

export const AlbumImage = () => {
  const { albumId, imageId } = Route.useParams()

  // Fetch the album data (will use cache if available)
  const { data: album, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => albumsApi.fetchAlbumById(albumId),
  })

  // Find the specific image from the album data
  const image = album?.images.find((img: ImgurImage) => img.id === imageId)

  if (isLoading) return <CenteredSpinner />
  if (!image) return <>No album images found! Please go back and try again.</>

  return (
    <AlbumImageContainer>
      {image.description && <ImageDescription>{image.description}</ImageDescription>}
      <FullScreenImage src={image.link} alt={image.description || 'image'} />
    </AlbumImageContainer>
  )
}
