import { Route, Routes } from 'react-router-dom'

import { Landing, Login, SignUp, Testing } from 'src/pages/index'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/testing" element={<Testing />} />
    </Routes>
  )
}
export default App
