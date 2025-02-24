import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { albumsApi } from '../../api/utils'
import { Route } from '../../routes/albums/$albumId'
import { filterImgurAlbumImagesByExtension } from '../../utils'
import { CenteredSpinner } from '../LoadingSpinners/CircularProgress'
import {
  AlbumContainer,
  AlbumImage,
  GridContainer,
  GridItemContainer,
  ImageDescription,
} from './Albums.styled'

export const Album = () => {
  const { albumId } = Route.useParams()

  const { data: album, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => albumsApi.fetchAlbumById(albumId),
  })

  if (isLoading) return <CenteredSpinner />
  if (!album) return <>No album images found! Please go back and try again.</>

  const albumWithFilteredImages = filterImgurAlbumImagesByExtension([album])
  const [filteredAlbum] = albumWithFilteredImages
  const { images } = filteredAlbum

  return (
    <AlbumContainer>
      {album.title && <ImageDescription>{album.title}</ImageDescription>}
      <GridContainer>
        {images.map((image) => (
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
