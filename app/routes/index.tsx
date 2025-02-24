import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import { Albums } from '../components/Albums/Albums'
import { ResultsContainer, RootContainer, SearchBarContainer } from '../components/Root/Root.styled'
import { Search } from '../components/Search/Search'
import { TRANSITION_TIME_MS } from '../utils'
import { albumsApi } from './api/albums'

export const Route = createFileRoute('/')({
  component: Root,
  validateSearch: z.object({
    query: z.string().optional(),
  }),
})

function Root() {
  const [shouldPersistLayout, setShouldPersistLayout] = useState(false)
  const [shouldShowResults, setShouldShowResults] = useState(false)
  const searchParams = useSearch({ from: Route.id })
  const query = searchParams.query || ''

  const { data, isLoading } = useQuery({
    queryKey: ['query', query], // Use query from URL, not local state
    queryFn: async () => {
      const albums = await albumsApi.fetchAlbums(query)

      // Subsequent searches won't reset the UI transition
      setShouldPersistLayout(true)

      // Allow layout shift to finish before rendering album images, matches CSS transition timing
      setTimeout(() => setShouldShowResults(true), TRANSITION_TIME_MS + 100)
      return albums
    },
    enabled: !!query,
    staleTime: 0,
  })

  const isExpanded = shouldPersistLayout || data?.albums?.length > 0

  return (
    <RootContainer>
      <SearchBarContainer>
        <Search isLoading={isLoading} isRowLayout={isExpanded} />
      </SearchBarContainer>
      <ResultsContainer isExpanded={isExpanded}>
        {shouldShowResults && <Albums albums={data?.albums} />}
      </ResultsContainer>
    </RootContainer>
  )
}
