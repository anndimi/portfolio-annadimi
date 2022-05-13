import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './elements/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Footer from './elements/Footer'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:name" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
