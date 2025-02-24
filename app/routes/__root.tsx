import { QueryClient } from '@tanstack/react-query'
import { createRootRoute } from '@tanstack/react-router'
import { RootComponent } from '../components/Root/Root'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Tanstack Demo' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>Not found</div>,
})
