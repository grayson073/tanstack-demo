import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { vaporwaveData } from '../../../data/vaporwave'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const APIRoute = createAPIFileRoute('/api/albums')({
  GET: async ({ request }) => {
    console.log('Request received:', request)
    await delay(3000) // Simulate a delay
    return json({ albums: vaporwaveData })
  },
})
