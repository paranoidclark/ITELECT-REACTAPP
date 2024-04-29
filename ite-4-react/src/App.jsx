import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Home'
import Addstudent from './Addstudent'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<Addstudent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App