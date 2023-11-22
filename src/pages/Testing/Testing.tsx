import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Testing = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
)

function Example() {
  const { isLoading, data } = useQuery('repoData', () =>
    fetch('http://localhost:5000/api').then((res) => res.json())
  )

  if (isLoading) return 'Loading...'

  return (
    <div>
      <h1>Get started</h1>
      {typeof data === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user: string, i: number) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}

export default Testing
