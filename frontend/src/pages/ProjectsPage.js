import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LottieProjects from '../elements/LottieProjects'

const ProjectsPage = ({ projects }) => {
  const projectsList = projects.filter(
    (project) => project.topics.includes('display-project') === true
  )

  return (
    <>
      <PageContainer>
        <LottieProjects />

        <ProjectsListWrapper>
          {projectsList.map((project) => (
            <ProjectsListContainer key={project.name}>
              <Link to={`/projects/${project.name}`} className="project-link">
                /{project.name}
              </Link>
            </ProjectsListContainer>
          ))}
        </ProjectsListWrapper>
      </PageContainer>
    </>
  )
}

export default ProjectsPage

const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

const ProjectsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const ProjectsListContainer = styled.div`
  display: flex;
  align-items: center;
  /* .github-icon {
    all: initial;
    cursor: pointer;
  }
  img {
    width: 35px;
    transition: transform 0.2s;
    :hover {
      transform: scale(1.2);
    }
  } */
  .project-link {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
    padding: 10px 5px;
    position: relative;
  }
  .project-link:after {
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
  .project-link:hover:after {
    width: 100%;
    left: 0;
  }
`

// {project.codingLanguages.map((language) => (
//     <div key={language.name}>
//       <span>{language.JavaScript}</span>
//     </div>
//   ))}
