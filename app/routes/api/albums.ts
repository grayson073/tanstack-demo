import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { env } from '../../env'
import { filterImagesByExtension } from '../../utils'

const ALBUMS_URL =
  typeof window !== 'undefined'
    ? '/api/albums' // Client-side: relative URL works
    : 'http://localhost:3000/api/albums' // Server-side: need full URL

// File Routes
export const APIRoute = createAPIFileRoute(ALBUMS_URL)({
  GET: async ({ request }) => {
    try {
      const url = new URL(request.url)
      const { searchParams } = url
      const query = searchParams.get('query')
      const response = await fetch(
        `https://api.imgur.com/3/gallery/search?q_all=${query}&q_type=album&per_page=20`,
        {
          headers: {
            Authorization: `Client-ID ${env.imgurClientId}`,
          },
        }
      )
      const data = await response.json()
      const albums = data.data
      const filteredAlbums = filterImagesByExtension(albums).slice(0, 16)
      return json({ albums: filteredAlbums })
    } catch (e) {
      console.log(e)
      return json({ albums: [] })
    }
  },
})

// API
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
}
