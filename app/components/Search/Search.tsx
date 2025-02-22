import React, { useState } from 'react'
import { SearchButton, SearchContainer, SearchInput } from './Search.styled'

export const Search = () => {
  const [query, setQuery] = useState('')
  const handleSearch = () => {
    console.log('Searching for:', query)
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
      <SearchButton variant='contained' onClick={handleSearch} sx={{ width: '100%' }}>
        Search Anything
      </SearchButton>
    </SearchContainer>
  )
}
