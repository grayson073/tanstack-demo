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

export const SearchContainer = styled.div<{ isExpanded: boolean }>`
  transition: all 0.5s ease;
  flex: ${({ isExpanded }) => (isExpanded ? '1' : '0.2')};
  display: flex;
  align-items: ${({ isExpanded }) => (isExpanded ? 'center' : 'flex-end')};
  justify-content: center;
  padding: 20px;
`

export const ResultsContainer = styled.div<{ isExpanded: boolean }>`
  transition: all 0.5s ease;
  flex: ${({ isExpanded }) => (isExpanded ? '4' : '0')};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
`
