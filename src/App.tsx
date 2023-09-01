import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'

function App() {
  const [backendData, setBackendData] = useState([] as string[])

  useEffect(() => {
    async function doGetRequest() {
      const res = await axios.get('http://localhost:5000/api')
      const data: string[] = res.data.users
      setBackendData(data)
    }
    doGetRequest()
  }, [])

  return (
    <>
      <h1>Get started</h1>
      {typeof backendData === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => <p key={i}>{user}</p>)
      )}
    </>
  )
}

export default App
