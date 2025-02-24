export const ALBUMS_URL =
  typeof window !== 'undefined'
    ? '/api/albums' // Client-side: relative URL works
    : 'http://localhost:3000/api/albums' // Server-side: need full URL

export const albumsApi = {
  fetchAlbums: async (query?: string) => {
    if (!query) {
      return { albums: [] }
    }
    const response = await fetch(`${ALBUMS_URL}?query=${query}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch albums for query: ${query}`)
    }
    return response.json()
  },
  fetchAlbumById: async (albumId: string) => {
    const response = await fetch(`${ALBUMS_URL}/${albumId}`)
    if (!albumId || !response.ok) {
      throw new Error(`Failed to fetch album with ID: ${albumId}`)
    }
    return response.json()
  },
}
