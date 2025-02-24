import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { albumsApi } from '../api/utils'
import { SearchPage } from '../components/Search/SearchPage'

// Zod schema for search parameters
const AlbumsSearchSchema = z.object({
  query: z.string().optional(),
})

export const Route = createFileRoute('/')({
  validateSearch: AlbumsSearchSchema,
  loader: async ({ location }) => {
    const search = AlbumsSearchSchema.parse(location.search)
    const albums = search.query ? await albumsApi.fetchAlbums(search.query ?? '') : []
    return { albums }
  },
  component: SearchPage,
})
