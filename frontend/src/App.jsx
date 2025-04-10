import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
import DisplayPage from './components/DisplayPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users" element={<DisplayPage />} />
      </Routes>
    </Router>
  )
}

export default App
