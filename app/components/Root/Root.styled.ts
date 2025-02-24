import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { TRANSITION_TIME_MS } from '../../utils'

export const SearchPageContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  min-height: 100%;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  transition: all ${TRANSITION_TIME_MS}ms ease;
`

export const ResultsContainer = styled.div<{ isExpanded: boolean }>`
  flex: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
  transition: all ${TRANSITION_TIME_MS}ms ease;
`
