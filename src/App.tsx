import { Route, Routes } from 'react-router-dom'

import { Landing, SignUp, Testing } from 'src/pages/index'

import SignUpContinue from './pages/Sign Up Continue/SignUpContinue'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/signup-continue" element={<SignUpContinue />} />
    </Routes>
  )
}

export default App
