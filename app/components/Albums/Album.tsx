import { ImgurAlbum } from '../../types'
import { AlbumContainer, AlbumImage } from './Albums.styled'

type AlbumProps = {
  album: ImgurAlbum
}

export const Album = ({ album }: AlbumProps) => {
  const coverUrl = `https://i.imgur.com/${album.cover}.jpeg`
  return (
    <AlbumContainer>
      <AlbumImage alt={album.title} src={coverUrl} />
    </AlbumContainer>
  )
}
