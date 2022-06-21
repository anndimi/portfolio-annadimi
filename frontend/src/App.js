import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './elements/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './elements/Footer'
import ErrorPage from './pages/ErrorPage'
import './styles/App.css'

const App = () => {
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://annadimi-portfolio.herokuapp.com/user')
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])

  useEffect(() => {
    fetch('https://annadimi-portfolio.herokuapp.com/projects')
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
          <Route
            path="/projects/:name"
            element={<ProjectPage githubProjects={projects} />}
          />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/contact" element={<Contact user={user} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer user={user} />
      </BrowserRouter>
    </div>
  )
}

export default App
