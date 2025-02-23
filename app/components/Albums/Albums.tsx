import { ImgurAlbum } from '../../types'
import { Album } from './Album'
import { AlbumsContainer } from './Albums.styled'

type AlbumProps = {
  albums: ImgurAlbum[]
}

export const Albums = ({ albums }: AlbumProps) => {
  if (!albums) return null

  const displayedAlbums = albums.map((a) => <Album key={a.id} album={a} />)
  return <AlbumsContainer>{displayedAlbums}</AlbumsContainer>
}
