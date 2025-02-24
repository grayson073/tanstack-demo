import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { albumsApi } from '../../api/utils'
import { Route } from '../../routes/albums/$albumId'
import { filterImagesByExtension } from '../../utils'
import { AlbumsContainer } from './Albums.styled'

export const Album = () => {
  const { albumId } = Route.useParams()

  const { data: albumImages, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => albumsApi.fetchAlbumById(albumId),
  })

  if (isLoading || !albumImages) {
    return <div>Loading album {albumId}...</div>
  }

  const filteredImages = filterImagesByExtension(albumImages)

  return (
    <AlbumsContainer>
      {filteredImages.map((image) => (
        <Link
          to='/albums/$albumId/images/$imageId'
          key={image.id}
          params={{ albumId: albumId, imageId: image.id }}
        >
          <img key={image.id} src={image.link} alt={image.title ?? ''} />
        </Link>
      ))}
    </AlbumsContainer>
  )
}
