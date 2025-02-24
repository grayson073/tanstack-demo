import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const GridContainer = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== 'isLoading',
})<{ isLoading?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`

export const GridItemContainer = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== 'isLoading',
})<{ isLoading?: boolean }>`
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  height: 200px;
  width: 200px;
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

export const ImageDescription = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const AlbumContainer = styled(Box)`
  align-self: center;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-self: center;
  padding: 40px;
`

export const AlbumImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px 40px 40px;
`

export const FullScreenImage = styled.img`
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  min-height: calc(100vh - 150px);
  max-width: 100%;
  object-fit: contain;
`
