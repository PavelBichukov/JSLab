import { Route, Routes } from 'react-router-dom'

import {
  AddStation,
  Home,
  Landing,
  Login,
  SignUp,
  SignUpContinue,
  Testing,
  Stations,
  Transactions,
  Payments,
} from 'src/pages/index'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-station" element={<AddStation />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/signup-continue" element={<SignUpContinue />} />
      <Route path="/stations" element={<Stations />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  )
}

export default App
