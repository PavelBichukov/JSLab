import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Typography } from 'components/share/Typography'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <Typography variant="ParagraphM"> Some text </Typography>
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
        data.users.map((user: string, i: number) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}
export default App
