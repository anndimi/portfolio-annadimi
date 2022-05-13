import React from 'react'
import { Link } from 'react-router-dom'
import githubIcon from '../assets/github-icon.png'
import styled from 'styled-components'

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h1>This is all projects page!</h1>
      <ProjectsListWrapper>
        {projects.map((project) => (
          <ProjectsListContainer key={project.name}>
            <Link to={`/projects/${project.name}`}>{project.name}</Link>
            <a href={project.htmlUrl}>
              <img src={githubIcon} alt="Github" style={{ width: 70 }} />
            </a>
          </ProjectsListContainer>
        ))}
      </ProjectsListWrapper>
    </>
  )
}

export default ProjectsPage

const ProjectsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1vw;
`

const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
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

// {project.codingLanguages.map((language) => (
//     <div key={language.name}>
//       <span>{language.JavaScript}</span>
//     </div>
//   ))}
