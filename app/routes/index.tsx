import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import { Albums } from '../components/Albums/Albums'
import { ResultsContainer, RootContainer, SearchBarContainer } from '../components/Root/Root.styled'
import { Search } from '../components/Search/Search'

export const Route = createFileRoute('/')({
  component: Root,
  validateSearch: z.object({
    query: z.string().optional().default(''),
  }),
})

function Root() {
  const [hasSearchedOnce, setHasSearchedOnce] = useState(false)
  const searchParams = useSearch({ from: Route.id })
  const searchQuery = searchParams.query || ''

  const { data, isLoading } = useQuery({
    queryKey: ['query', searchQuery], // Use searchQuery from URL, not local state
    queryFn: async () => {
      const response = await fetch(`/api/albums?query=${searchQuery}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setHasSearchedOnce(true) // Subsequent searches won't reset the UI transition
      return response.json()
    },
    enabled: !!searchQuery,
  })

  const hasResults = hasSearchedOnce || (!isLoading && data?.albums?.length > 0)

  return (
    <RootContainer>
      <SearchBarContainer isExpanded={hasResults}>
        <Search isLoading={isLoading} isRowLayout={hasResults} />
      </SearchBarContainer>
      <ResultsContainer isExpanded={hasResults}>
        <Albums albums={data?.albums} />
      </ResultsContainer>
    </RootContainer>
  )
}
