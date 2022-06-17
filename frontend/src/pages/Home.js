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
        {window.innerWidth < 768 ? (
          <>
            <ProfileWrapper>
              <LottieAvatar style={{ height: 300 }} />
              <ProfileContainer>
                <div>anna dimitrakopoulos</div>
                <span className="divider"></span>
                <div>frontend developer</div>
                <span className="divider"></span>
                <div>{user.location}</div>
              </ProfileContainer>
            </ProfileWrapper>
          </>
        ) : (
          <ProfileContainer>
            <LottieAvatar />
            <div>anna dimitrakopoulos</div>
            <span className="divider"></span>
            <div>frontend developer</div>
            <span className="divider"></span>
            <div>{user.location}</div>
          </ProfileContainer>
        )}

        <FeaturedProjectsSection>
          <h2>/featured projects</h2>
          <FeaturedProjectsWrapper>
            {featuredProjects.map((project) => (
              <FeaturedProjectsContainer key={project.name}>
                <Link
                  to={`/projects/${project.name}`}
                  className="project-link"
                  onClick={() => window.scrollTo(0, 0)}
                >
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
        </FeaturedProjectsSection>
      </>
    )
  }
}

export default Home

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 2fr;
  gap: 25vh;
`

const ProfileContainer = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1em;
  max-width: 880px;
  width: 85%;
  .divider {
    border: solid 0.5px #393939;
    height: 75px;
  }
  div {
    font-weight: 300;
    font-size: 20px;
    text-transform: lowercase;
    text-align: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 991px) {
    div {
      font-size: 18px;
    }
  }
`
const FeaturedProjectsSection = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 1666px;
  width: 95%;
  margin: auto;
  h2 {
    display: flex;
    align-items: center;
    border-right: 2px solid #393939;
    padding: 30px 0 30px 0;
  }

  @media (max-width: 991px) {
    grid-template-columns: none;
    grid-template-rows: 140px 1fr;
    width: 80%;

    h2 {
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

const FeaturedProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: space-between;
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

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;

    .project-link {
      width: 50%;
      padding: 0;
    }
  }
`
