import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { vaporwaveData } from '../../../data/vaporwave'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const BASE_URL = '/api'
const ALBUMS = `${BASE_URL}/albums`

// File Routes
export const APIRoute = createAPIFileRoute(ALBUMS)({
  GET: async () => {
    await delay(1500) // Simulate a delay
    return json({
      albums: [...vaporwaveData].slice(0, 20),
    })
  },
})

// Helpers
export const albumsApi = {
  fetchAlbums: async (query: string) => {
    const response = await fetch(`${ALBUMS}?query=${query}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch albums for query: ${query}`)
    }
    return response.json()
  },
}
