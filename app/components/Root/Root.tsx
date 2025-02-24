import { QueryClientProvider } from '@tanstack/react-query'
import { HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { queryClient } from '../../routes/__root'
import { BackToSearch } from '../Navigation/BackToSearch'

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => {
  const routerState = useRouterState()
  const { pathname } = routerState.location
  const shouldShowBackButton = pathname !== '/'

  const style = {
    backgroundColor: '#000000',
    color: '#ffffff',
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
        {shouldShowBackButton && <BackToSearch />}
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export const RootComponent = () => {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </RootDocument>
  )
}
