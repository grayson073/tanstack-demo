import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const AlbumsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`

export const AlbumContainer = styled(Box)`
  aspect-ratio: 1 / 1; /* Perfect square */
  border-radius: 8px;
  height: 150px;
  width: 150px;
`

export const AlbumImage = styled.img`
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  height: 100%;
  width: 100%;

  &:hover {
    box-shadow: 0 0 10px 5px #ff7f50;
  }
`
