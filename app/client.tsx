import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StartClient } from '@tanstack/start'
import { hydrateRoot } from 'react-dom/client'
import { createRouter } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const router = createRouter()

hydrateRoot(
  document,
  <QueryClientProvider client={queryClient}>
    <StartClient router={router} />
  </QueryClientProvider>
)
