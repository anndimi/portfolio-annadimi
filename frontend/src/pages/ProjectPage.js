import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../elements/Loader'
import styled from 'styled-components'

const ProjectPage = () => {
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)
  const { name } = useParams()

  const dayjs = require('dayjs')

  useEffect(() => {
    fetch(`http://localhost:8080/projects/${name}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {JSON.stringify(project) === JSON.stringify({}) ? (
        <Loader />
      ) : (
        <PageContainer>
          <SingleProjectContainer>
            <h1>/{project.name}</h1>
            <h4>created at: {dayjs(project.createdAt).format('MM-DD-YYYY')}</h4>
            <ProjectImgWrapper>
              <span />
              <img src={project.img} alt={project.name} />{' '}
            </ProjectImgWrapper>
            <p>{project.long_description}</p>
          </SingleProjectContainer>
          <ProjectTechWrapper>
            <h3>/tech used</h3>

            <TechImgWrapper>
              {project.projectTechImg.map((tech) => (
                <TechImgContainer key={tech._id}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </TechImgContainer>
              ))}
            </TechImgWrapper>
          </ProjectTechWrapper>
          <a href={project.homepage} target="_blank" rel="noreferrer">
            View it live
          </a>
          <a href={project.htmlUrl} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </PageContainer>
      )}
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

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const SingleProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: lowercase;
  }
  img {
    width: 650px;
    height: auto;
    opacity: 0.7;
  }
  span {
    border: 2px solid #393939;
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

  @media (max-width: 991px) {
    margin: initial;

    h1 {
      margin-top: 50px;
    }

    h4 {
      margin: 0;
    }
  }
`
const ProjectImgWrapper = styled.div`
  align-self: center;
  margin-top: 15px;
`

const ProjectTechWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  max-width: 1666px;
  width: 100%;
  margin: 40px 0 40px 0;
  h3 {
    display: flex;
    align-items: center;
    border-right: 2px solid #393939;
    padding: 20px 0 20px 0;
  }

  @media (max-width: 991px) {
    grid-template-columns: none;
    grid-template-rows: 140px 1fr;

    h3 {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid #393939;
      border-right: none;
      padding: 0;
      text-align: center;
      margin-top: 0;
    }
  }
`

const TechImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3em;
  margin: 30px;
`

const TechImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  span {
    font-weight: 300;
    font-size: 17px;
    line-height: 1.1;
    padding-top: 3px;
  }
  img {
    height: auto;
    width: 56px;
  }
`
