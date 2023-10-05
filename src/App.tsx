import { Route, Routes } from 'react-router-dom'

import {
  Home,
  Landing,
  Login,
  SignUp,
  SignUpContinue,
  Testing,
} from 'src/pages/index'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/signup-continue" element={<SignUpContinue />} />
    </Routes>
  )
}

export default App
