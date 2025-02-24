import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const AlbumsContainer = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== 'isLoading',
})<{ isLoading?: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`

export const AlbumContainer = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== 'isLoading',
})<{ isLoading?: boolean }>`
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  height: 150px;
  width: 150px;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transform: scale(${({ isLoading }) => (isLoading ? 1 : 0.9)});
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
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
