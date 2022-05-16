import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ProjectPage = () => {
  const [project, setProject] = useState({})
  const { name } = useParams()

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
      <SingleProjectContainer>
        <h1>{project.name}</h1>
        <img src={project.img} alt={project.name} />
        <p>{project.long_description}</p>
        <a href={project.homepage} target="_blank" className="project-homepage">
          View it live!
        </a>
      </SingleProjectContainer>
    </>
  )
}

export default ProjectPage

const SingleProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
  img {
    width: 650px;
    height: auto;
    align-self: center;
    border-radius: 0.5em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .project-homepage {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  .project-homepage:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #393939;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .project-homepage:hover:after {
    width: 100%;
    left: 0;
  }
`
