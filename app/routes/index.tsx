import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import { Albums } from '../components/Albums/Albums'
import {
  ResultsContainer,
  RootContainer,
  SearchBarContainer,
  TRANSITION_TIME_MS,
} from '../components/Root/Root.styled'
import { Search } from '../components/Search/Search'
import { albumsApi } from './api/albums'

export const Route = createFileRoute('/')({
  component: Root,
  validateSearch: z.object({
    query: z.string().optional().default(''),
  }),
})

function Root() {
  const [shouldPersistLayout, setShouldPersistLayout] = useState(false)
  const [shouldShowResults, setShouldShowResults] = useState(false)
  const searchParams = useSearch({ from: Route.id })
  const searchQuery = searchParams.query || ''

  const { data, isLoading } = useQuery({
    queryKey: ['query', searchQuery], // Use searchQuery from URL, not local state
    queryFn: async () => {
      const albums = await albumsApi.fetchAlbums(searchQuery)

      // Subsequent searches won't reset the UI transition
      setShouldPersistLayout(true)

      // Allow layout shift to finish before rendering album images, matches CSS transition timing
      setTimeout(() => setShouldShowResults(true), TRANSITION_TIME_MS + 100)
      return albums
    },
    enabled: !!searchQuery,
  })

  const handleResetLayout = () => {
    setShouldShowResults(false)
    setTimeout(() => setShouldPersistLayout(false), TRANSITION_TIME_MS + 100)
  }

  const hasResults = shouldPersistLayout && !isLoading && data?.albums?.length > 0

  return (
    <RootContainer>
      <SearchBarContainer isExpanded={hasResults}>
        <Search isLoading={isLoading} isRowLayout={hasResults} onClearQuery={handleResetLayout} />
      </SearchBarContainer>
      <ResultsContainer isExpanded={hasResults}>
        {shouldShowResults && <Albums albums={data?.albums} />}
      </ResultsContainer>
    </RootContainer>
  )
}
