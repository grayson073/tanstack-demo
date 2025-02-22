import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { Search } from '../components/Search/Search'

export const Route = createFileRoute('/')({
  component: Root,
})

const RootContainer = styled(Box)`
  align-items: center;
  background-color: #000000;
  display: flex;
  justify-content: center;
  height: 100%;
`

function Root() {
  return (
    <RootContainer>
      <Search />
    </RootContainer>
  )
}
