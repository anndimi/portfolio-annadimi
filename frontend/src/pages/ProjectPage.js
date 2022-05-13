import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
  const [project, setProject] = useState({})
  const { name } = useParams()
  console.log(name)

  useEffect(() => {
    fetch(`http://localhost:8080/projects/${name}`)
      .then(
        (res) => {
          console.log(res)
          return res.json()
        },
        (err) => console.log(err)
      )
      .then(
        (data) => {
          console.log(data)
          return setProject(data)
        },
        (err) => console.log(err)
      )
  }, [])

  console.log(project)

  return (
    <>
      <h1>{project.name}</h1>
      <img src={project.img} />
      <p>{project.description}</p>
    </>
  )
}

export default ProjectPage
