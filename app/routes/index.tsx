import { createFileRoute } from '@tanstack/react-router'

const Home = () => {
  return <div>Hello Tanstack!</div>
}

export const Route = createFileRoute('/')({
  component: Home,
})
