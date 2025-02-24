import { IconButton, InputAdornment } from '@mui/material'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { X } from 'lucide-react'
import { KeyboardEvent, useState } from 'react'
import searchIcon from '../../assets/searchIcon.jpeg'
import { Route as rootRoute } from '../../routes'
import { CustomSearchIcon, SearchButton, SearchContainer, SearchInput } from './Search.styled'

type SearchProps = {
  isLoading: boolean
  isRowLayout: boolean
}

export const Search = ({ isLoading, isRowLayout }: SearchProps) => {
  const navigate = useNavigate({ from: rootRoute.id })
  const searchParams = useSearch({ from: rootRoute.id })
  const searchQuery = searchParams.query ?? ''
  const [query, setQuery] = useState(searchQuery)

  const handleClearQuery = () => {
    setQuery('')
    navigate({ search: { query: undefined } })
  }

  const handleSearch = () => {
    if (query.trim() && query !== searchQuery) {
      navigate({ search: { query } })
      setQuery('')
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleSearch()
  }

  const isSubmitDisabled = !query

  return (
    <SearchContainer isRowLayout={isRowLayout}>
      <SearchInput
        slotProps={{
          input: {
            endAdornment: query ? (
              <InputAdornment position='end'>
                <IconButton aria-label='clear search query' onClick={handleClearQuery}>
                  <X />
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
        inputProps={{
          style: { textAlign: 'center' },
        }}
        disabled={isLoading}
        inputRef={(input) => input && input.focus()}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        size='small'
        value={query}
      />
      <SearchButton
        disabled={isSubmitDisabled}
        loading={isLoading}
        variant='contained'
        onClick={handleSearch}
        sx={{ width: '100%' }}
        loadingPosition='end'
        endIcon={
          <CustomSearchIcon isDisabled={isSubmitDisabled} alt='search icon' src={searchIcon} />
        }
      >
        Free your mind
      </SearchButton>
    </SearchContainer>
  )
}
