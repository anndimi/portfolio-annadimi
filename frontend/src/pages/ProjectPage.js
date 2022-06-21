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
    fetch(`https://annadimi-portfolio.herokuapp.com/projects/${name}`, {mode: "cors"})
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
            <img src={project.img} alt={project.name} />
            <ProjectImgWrapper></ProjectImgWrapper>
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
          <ProjectLinksContainer>
            <a href={project.homepage} target="_blank" rel="noreferrer">
              / View it live /
            </a>

            <a href={project.htmlUrl} target="_blank" rel="noreferrer">
              / GitHub Repo /
            </a>
          </ProjectLinksContainer>
        </PageContainer>
      )}
    </>
  )
}

export default ProjectPage

const PageContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #393939;
    text-transform: lowercase;
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
    width: 100%;
  }
`

const SingleProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  h1 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: lowercase;
  }
  img {
    width: 100%;
    max-width: 650px;
    height: auto;
    border: 2px solid #393939;
    padding: 10px;
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
  width: 90%;
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
    width: 85%;

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

const ProjectLinksContainer = styled.div`
  @media (max-width: 991px) {
    text-align: center;
  }
`
