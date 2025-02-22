export type ImgurImage = {
  id: string
  link: string
}

export type ImgurAlbum = {
  id: string
  images: ImgurImage[]
}
