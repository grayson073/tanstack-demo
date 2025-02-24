import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { albumsApi } from '../../api/utils'
import { Route } from '../../routes/albums/$albumId'
import { filterImagesByExtension } from '../../utils'
import { CenteredSpinner } from '../LoadingSpinners/CircularProgress'
import { AlbumContainer, AlbumImage, GridContainer, GridItemContainer } from './Albums.styled'

export const Album = () => {
  const { albumId } = Route.useParams()

  const { data: albumImages, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => albumsApi.fetchAlbumById(albumId),
  })

  const filteredImages = filterImagesByExtension(albumImages)

  if (isLoading) return <CenteredSpinner />

  return (
    <AlbumContainer>
      <GridContainer>
        {filteredImages.map((image) => (
          <Link
            to='/albums/$albumId/images/$imageId'
            key={image.id}
            params={{ albumId: albumId, imageId: image.id }}
          >
            <GridItemContainer>
              <AlbumImage key={image.id} src={image.link} alt={image.title ?? ''} />
            </GridItemContainer>
          </Link>
        ))}
      </GridContainer>
    </AlbumContainer>
  )
}
