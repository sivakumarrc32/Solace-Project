import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Signup from './Components/Signup/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
