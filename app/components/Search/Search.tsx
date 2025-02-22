import { useNavigate, useSearch } from '@tanstack/react-router'
import { Search as SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Route as rootRoute } from '../../routes'
import { SearchButton, SearchContainer, SearchInput } from './Search.styled'

type SearchProps = {
  isLoading: boolean
}

export const Search = ({ isLoading }: SearchProps) => {
  const navigate = useNavigate({ from: rootRoute.id })
  const searchParams = useSearch({ from: rootRoute.id })
  const searchQuery = searchParams.query ?? ''
  const [query, setQuery] = useState(searchQuery)

  const handleSearch = () => {
    if (query.trim() && query !== searchQuery) navigate({ search: { query } })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleSearch()
  }

  return (
    <SearchContainer>
      <SearchInput
        inputRef={(input) => input && input.focus()}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        size='small'
      />
      <SearchButton
        loading={isLoading}
        variant='contained'
        onClick={handleSearch}
        sx={{ width: '100%' }}
        loadingPosition='end'
        endIcon={<SearchIcon size={16} />}
      >
        Search Anything
      </SearchButton>
    </SearchContainer>
  )
}
