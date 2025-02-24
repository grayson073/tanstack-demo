import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { ALBUMS_URL } from '../../../api/utils'
import { env } from '../../../env'
import { filterImgurAlbumImagesByExtension } from '../../../utils'

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
      const filteredAlbums = filterImgurAlbumImagesByExtension(albums).slice(0, 16)
      return json({ albums: filteredAlbums })
    } catch (e) {
      console.log(e)
      return json({ albums: [] })
    }
  },
})
