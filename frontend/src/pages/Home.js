import React from 'react'
import { Link } from 'react-router-dom'
import githubIcon from '../assets/icons/github-icon.png'
import styled from 'styled-components'
import LottieAvatar from '../elements/LottieAvatar'

const Home = ({ user, projects }) => {
  const featuredProjects = projects.filter(
    (project) => project.topics.includes('featured-project') === true
  )

  if (featuredProjects) {
    return (
      <>
        <ProfileContainer>
          <LottieAvatar />
          <span>{user.login}</span>
          <span className="divider"></span>
          <span>frontend developer</span>
          <span className="divider"></span>
          <span>{user.location}</span>
        </ProfileContainer>

        <FeaturedProjectsWrapper>
          <h2>/featured projects</h2>
          <span className="divider"></span>
          {featuredProjects.map((project) => (
            <FeaturedProjectsContainer key={project.name}>
              <Link to={`/projects/${project.name}`} className="project-link">
                {project.name}
              </Link>
              <a
                href={project.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="github-icon"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
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
  gap: 2vw;

  .divider {
    border: solid 0.5px #393939;
    height: 75px;
  }

  span {
    font-weight: 300;
    font-size: 20px;
    text-transform: lowercase;
  }
`

const FeaturedProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 2vw;

  .divider {
    border: solid 0.5px #393939;
    height: 75px;
  }
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
