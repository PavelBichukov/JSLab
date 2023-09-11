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
  )
}
export default App
