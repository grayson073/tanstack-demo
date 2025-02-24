import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { env } from '../../../env'

export const APIRoute = createAPIFileRoute('/api/albums/$albumId')({
  GET: async ({ params }) => {
    try {
      const { albumId } = params
      const response = await fetch(`https://api.imgur.com/3/album/${albumId}/images`, {
        headers: {
          Authorization: `Client-ID ${env.imgurClientId}`,
        },
      })
      const data = await response.json()
      const albumImages = data.data
      return json(albumImages)
    } catch (e) {
      console.log(e)
      return json([])
    }
  },
})
