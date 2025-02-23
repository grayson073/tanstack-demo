import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const RootContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  height: 100%;
`

export const SearchBarContainer = styled.div<{ isExpanded: boolean }>`
  align-items: ${({ isExpanded }) => (isExpanded ? 'center' : 'flex-end')};
  display: flex;
  flex: ${({ isExpanded }) => (isExpanded ? '1' : '0.1')};
  height: 200px;
  justify-content: center;
  padding: 20px;
  transition: all 0.5s ease;
`

export const ResultsContainer = styled.div<{ isExpanded: boolean }>`
  flex: ${({ isExpanded }) => (isExpanded ? '4' : '0')};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
  transition: all 0.5s ease;
`
