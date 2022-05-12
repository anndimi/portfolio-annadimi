import React, { useEffect, useState } from 'react'

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  const featuredProjects = projects.filter(
    (project) => project.topics.includes('featured-project') === true
  )

  if (featuredProjects) {
    return (
      <>
        <h1>These are projects! Yay!</h1>
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
