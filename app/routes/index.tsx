import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import { albumsApi } from '../api/utils'
import { Albums } from '../components/Albums/Albums'
import {
  ResultsContainer,
  SearchBarContainer,
  SearchPageContainer,
} from '../components/Root/Root.styled'
import { Search } from '../components/Search/Search'
import { ImgurAlbum } from '../types'
import { TRANSITION_TIME_MS } from '../utils'

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

function SearchPage() {
  const [shouldPersistLayout, setShouldPersistLayout] = useState(false)
  const [shouldShowResults, setShouldShowResults] = useState(false)
  const searchParams = useSearch({ from: Route.id })
  const query = searchParams.query || ''
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['albums', query], // Use query from URL, not local state
    queryFn: async () => {
      const albums = await albumsApi.fetchAlbums(query)

      // Subsequent searches won't reset the UI transition
      setShouldPersistLayout(true)

      // Allow layout shift to finish before rendering album images, matches CSS transition timing
      setTimeout(() => setShouldShowResults(true), TRANSITION_TIME_MS + 100)

      // Pre-populate cache with individual album data
      if (albums && albums.length > 0) {
        albums.forEach((album: ImgurAlbum) => {
          queryClient.setQueryData(['album', album.id], album)
        })
      }

      return albums
    },
    enabled: !!query,
    staleTime: 0,
  })

  const isExpanded = shouldPersistLayout || data?.albums?.length > 0

  return (
    <SearchPageContainer>
      <SearchBarContainer>
        <Search isLoading={isLoading} isRowLayout={isExpanded} />
      </SearchBarContainer>
      <ResultsContainer isExpanded={isExpanded}>
        {shouldShowResults && <Albums albums={data?.albums} />}
      </ResultsContainer>
    </SearchPageContainer>
  )
}
