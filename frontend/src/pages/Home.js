import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const [projects, setProjects] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('http://localhost:8080/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])

  const featuredProjects = projects.filter(
    (project) => project.topics.includes('featured-project') === true
  )

  if (featuredProjects) {
    return (
      <>
        <div>
          <img
            src={user.avatar_url}
            alt="Anna Dimitrakopoulos"
            style={{ width: 300, borderRadius: '50%' }}
          />
          <span>{user.login}</span>
          <span>{user.location}</span>
        </div>

        {featuredProjects.map((project) => (
          <div key={project.name}>
            <h2>{project.name}</h2>
            <a href={project.htmlUrl}>Github</a>
            {project.topics.map((topic) => (
              <p>{topic}</p>
            ))}
          </div>
        ))}
      </>
    )
  }
}

export default Home
