import React from 'react'
import { Link } from 'react-router-dom'
import githubIcon from '../assets/github-icon.png'
import styled from 'styled-components'

const Home = ({ user, projects }) => {
  const featuredProjects = projects.filter(
    (project) => project.topics.includes('featured-project') === true
  )

  if (featuredProjects) {
    return (
      <>
        <ProfileContainer>
          <img
            src={user.avatar_url}
            alt="Anna Dimitrakopoulos"
            style={{ width: 250, borderRadius: '50%' }}
          />
          <span>{user.login}</span>
          <span>{user.location}</span>
        </ProfileContainer>

        <FeaturedProjectsWrapper>
          {featuredProjects.map((project) => (
            <FeaturedProjectsContainer key={project.name}>
              <Link to={`/projects/${project.name}`} className="project-link">
                {project.name}
              </Link>
              <a href={project.htmlUrl} className="github-icon">
                <img src={githubIcon} alt="GitHub" />
              </a>
              {/* {project.topics.map((topic) => (
              <p>{topic}</p>
            ))} */}
            </FeaturedProjectsContainer>
          ))}
        </FeaturedProjectsWrapper>
      </>
    )
  }
}

export default Home

const ProfileContainer = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  gap: 5vw;
`

const FeaturedProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 5vw;
`

const FeaturedProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 35px;
    transition: transform 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }

  .github-icon {
    all: initial;
    cursor: pointer;
  }

  .project-link {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    display: inline-block;
    padding: 15px 20px;
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
