import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './elements/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Footer from './elements/Footer'
import './App.css'

const App = () => {
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home user={user} projects={projects} />} />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />

          <Route path="/projects/:name" element={<ProjectPage />} />

          <Route path="/about" element={<About user={user} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
