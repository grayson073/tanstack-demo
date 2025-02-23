export type ImgurImage = {
  id: string
  link: string
}

export type ImgurAlbum = {
  cover: string
  id: string
  images: ImgurImage[]
  title: string
}
