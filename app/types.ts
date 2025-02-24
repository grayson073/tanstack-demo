export type ImgurImage = {
  id: string
  link: string
  title: string | null
}

export type ImgurAlbum = {
  cover: string
  id: string
  images: ImgurImage[]
  title: string
}
