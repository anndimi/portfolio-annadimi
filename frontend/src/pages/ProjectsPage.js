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
        {window.innerWidth > 768 && <LottieProjects />}
        <ProjectsListWrapper>
          {projectsList.map((project) => (
            <ProjectsListContainer key={project.name}>
              <Link
                to={`/projects/${project.name}`}
                className="project-link"
                onClick={() => window.scrollTo(0, 0)}
              >
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

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 700px;
    width: 100%;
  }
`

const ProjectsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 991px) {
    align-items: center;
  }
`

const ProjectsListContainer = styled.div`
  display: flex;
  align-items: center;
  .project-link {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    font-size: 16px;
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

  @media (max-width: 768px) {
    .project-link {
      text-align: center;
    }
  }
`
