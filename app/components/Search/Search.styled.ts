import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'

export const SearchContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`

export const SearchInput = styled(TextField)`
  background-color: #ffffff;
  border-radius: 8px;
`

export const SearchButton = styled(Button)`
  background-color: #0ef169;
  color: #000000;
  width: 100%;

  &.Mui-disabled {
    background-color: #9c9ca2;
    color: #ffffff;
  }
`
