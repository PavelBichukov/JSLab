<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'

import Landing from 'src/pages/Landing/Landing'
import LogIn from 'src/pages/Log In/LogIn'
import SignUp from 'src/pages/Sign Up/SignUp'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
=======
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
    </QueryClientProvider>
  )
  // const [backendData, setBackendData] = useState([] as string[])
  //
  // useEffect(() => {
  //     async function doGetRequest() {
  //         const res = await axios.get('http://localhost:5000/api')
  //         const data: string[] = res.data.users
  //         setBackendData(data)
  //     }
  //     doGetRequest()
  // }, [])
  //
  // return (
  //     <>
  //         <h1>Get started</h1>
  //         {typeof backendData === 'undefined' ? (
  //             <p>Loading...</p>
  //         ) : (
  //             backendData.map((user, i) => <p key={i}>{user}</p>)
  //         )}
  //     </>
  // )
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
>>>>>>> 3b66186 (FEAT/INT-15: added a component for entering a password01)
  )
}
export default App
