import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Testing = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}
function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:5000/api').then((res) => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Get started</h1>
      {typeof data === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}
export default Testing
