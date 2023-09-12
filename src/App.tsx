import { Route, Routes } from 'react-router-dom'

import Landing from 'src/pages/Landing/Landing'
import Login from 'src/pages/Log In/Login'
import SignUp from 'src/pages/Sign Up/SignUp'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
export default App
