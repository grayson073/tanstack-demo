import { useQuery } from '@tanstack/react-query'
import { albumsApi } from '../../api/utils'
import { Route } from '../../routes/albums/$albumId/images/$imageId'
import { ImgurImage } from '../../types'

export const AlbumImage = () => {
  const { albumId, imageId } = Route.useParams()

  // Fetch the album data (will use cache if available)
  const { data: album, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => albumsApi.fetchAlbumById(albumId),
  })

  // Find the specific image from the album data
  const image = album?.find((img: ImgurImage) => img.id === imageId)

  if (isLoading || !image) {
    return <div>Loading image...</div>
  }

  return (
    <div>
      <img src={image.link} alt={image.description || 'image'} />
    </div>
  )
}
