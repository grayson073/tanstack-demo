import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { albumsApi } from '../../api/utils'

export const Route = createFileRoute('/albums/$albumId')({
  component: AlbumDetail,
})

function AlbumDetail() {
  const { albumId } = Route.useParams()

  const { data: album, isLoading } = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => {
      console.log('Fetching fresh data')
      return albumsApi.fetchAlbumById(albumId)
    },
    // This will use the cached data if available,
    // and only fetch if it's not in the cache
  })

  if (isLoading || !album) {
    return <div>Loading album {albumId}...</div>
  }

  return (
    <div>
      <h1>{album.title}</h1>
      <img src={album.coverImage} alt={album.title} />
      <p>Artist: {album.artist}</p>
    </div>
  )
}
