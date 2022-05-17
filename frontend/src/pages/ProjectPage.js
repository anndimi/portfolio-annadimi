import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import dayjs from 'dayjs'

const ProjectPage = () => {
  const [project, setProject] = useState({})
  const { name } = useParams()

  const dayjs = require('dayjs')

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
      <PageContainer>
        <SingleProjectContainer>
          <h1>/{project.name}</h1>
          <p>created at: {dayjs(project.createdAt).format('MM-DD-YYYY')}</p>
          <ProjectImgWrapper>
            <span />
            <img src={project.img} alt={project.name} />{' '}
          </ProjectImgWrapper>
          <p>{project.long_description}</p>
        </SingleProjectContainer>
        <a href={project.homepage} target="_blank" rel="noreferrer">
          View it live
        </a>
        <a href={project.htmlUrl} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </PageContainer>
    </>
  )
}

export default ProjectPage

const PageContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  a {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  a:after {
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
  a:hover:after {
    width: 100%;
    left: 0;
  }
`

const SingleProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: lowercase;
  }
  img {
    width: 650px;
    height: 345px;
    opacity: 0.7;
  }
  span {
    border: 1px solid #393939;
    height: 340px;
    width: 650px;
    z-index: 9999;
    position: absolute;
    margin-top: -15px;
    margin-left: -15px;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
`
const ProjectImgWrapper = styled.div`
  align-self: center;
  margin-top: 15px;
`
