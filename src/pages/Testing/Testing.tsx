import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Button from 'components/share/Button/Button'

import styles from './Testing.module.scss'

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
      <Button
        className={styles.textButton}
        type="button"
        size="small"
        mode="outlinedBlack"
        variant="primary"
      >
        Log in
      </Button>
      {typeof data === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user: string, i: number) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}

export default Testing
