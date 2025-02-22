import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'

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
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const style = {
    backgroundColor: '#000000',
    margin: 0,
    padding: 0,
    height: '100%',
  }

  return (
    <html style={style}>
      <head>
        <HeadContent />
      </head>
      <body style={style}>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
