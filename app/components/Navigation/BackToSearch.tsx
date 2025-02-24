import { IconButton } from '@mui/material'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { BackToSearchContainer, Text } from './BackToSearch.styled'

export const BackToSearch = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleBackToSearch = () => {
    // If at the album images page, go back home but preserve the search query
    if (window && pathname.includes('/albums/') && pathname.split('/').length === 3) {
      window.history.back()
    } else {
      navigate({ to: '/' })
    }
  }

  return (
    <BackToSearchContainer>
      <IconButton aria-label='back to search' onClick={handleBackToSearch}>
        <ArrowLeft color='#ffffff' size={16} />
      </IconButton>
      <Text>Back to Search</Text>
    </BackToSearchContainer>
  )
}
