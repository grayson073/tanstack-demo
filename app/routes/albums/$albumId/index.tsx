import { createFileRoute } from '@tanstack/react-router'
import { Album } from '../../../components/Albums/Album'

export const Route = createFileRoute('/albums/$albumId/')({
  component: Album,
})
