import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import { Results } from '../components/Results/Results'
import { ResultsContainer, RootContainer, SearchContainer } from '../components/Root/Root.styled'
import { Search } from '../components/Search/Search'

export const Route = createFileRoute('/')({
  component: Root,
  validateSearch: z.object({
    query: z.string().optional().default(''),
  }).parse,
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
      <SearchContainer isExpanded={hasResults}>
        <Search isLoading={isLoading} />
      </SearchContainer>
      <ResultsContainer isExpanded={hasResults}>
        <Results albums={data?.albums} />
      </ResultsContainer>
    </RootContainer>
  )
}
