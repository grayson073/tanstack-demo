import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'

export const SearchContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isRowLayout',
})<{ isRowLayout: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: ${({ isRowLayout }) => (isRowLayout ? 'row' : 'column')};
  gap: 10px;
  justify-content: center;
`

export const SearchInput = styled(TextField)`
  background-color: #ffffff;
  border-radius: 8px;
  min-width: 250px;
`

export const SearchButton = styled(Button)`
  background-color: #0ef169;
  color: #000000;
  width: 250px;

  &.Mui-disabled {
    background-color: #9c9ca2;
    color: #ffffff;
  }
`

export const CustomSearchIcon = styled.img<{ isDisabled: boolean }>`
  border-radius: 50%;
  opacity: ${({ isDisabled }) => (isDisabled ? '0.2' : '1')};
  transition: 500ms;
  width: 24px;
`
