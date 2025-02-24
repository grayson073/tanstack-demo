import { createFileRoute } from '@tanstack/react-router'
import { AlbumImage } from '../../../../components/Albums/AlbumImage'

export const Route = createFileRoute('/albums/$albumId/images/$imageId')({
  component: AlbumImage,
})
