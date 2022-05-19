import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cssIcon from '../assets/icons/css-icon.png'
import reactIcon from '../assets/icons/react-icon.png'
import nodeIcon from '../assets/icons/node-icon.png'
import jsIcon from '../assets/icons/js-icon.png'
import htmlIcon from '../assets/icons/html-icon.png'
import mongoIcon from '../assets/icons/mongo-icon.png'
import reduxIcon from '../assets/icons/redux-icon.png'
import postmanIcon from '../assets/icons/postman-icon.png'

const About = () => {
  return (
    <>
      <PageContainer>
        <AboutContainer>
          <h1>/about me</h1>
          <InfoContainer>
            <p>
              I'm a frontend developer with a master in speech and language
              pathology. I love the combination of logic and creativity in
              programming!
            </p>

            <p>
              Born in Sweden and raised in Greece. I moved back to Sweden in
              2008 to study and make something of myself. As a girl (growing up
              in Greece) it never crossed my mind to study programming, because
              "it was something that only boys do". And growing up in a
              segregated culture, like the Greek one, you don't think twice
              about those things because that’s the norm. Despite that I used to
              spend, and continue spending, the majority of my waking time in
              front of my PC; playing video games mostly. One could say that my
              PC is a natural extension to myself.
            </p>

            <p>
              I was working as a speech and language pathologist for 3 years and
              realised that it’s not what I want to do for the rest of my life.
              So I handed in my notice and decided to change direction in my
              career and try coding! I fell in love with it on the spot. I mean,
              it's like playing video games so what is there not to love?!
              Furthermore I really enjoy the problem solving aspect and the
              “aha” moments of understanding how things work (or why they
              don’t!).
            </p>

            <p>
              Throughout my various working experiences I’ve learned to cope
              with stress and fast paced working environments, where quick
              decision making, problem solving and flexibility is essential. I
              always strive to improve as a person and get better at what I do.
            </p>

            <p>
              Feel free to <Link to="/contact">contact</Link> me if you want to
              know more!
            </p>
          </InfoContainer>
        </AboutContainer>
        <TechContainer>
          <h1>/tech stack</h1>
          <TechInfoContainer>
            <span>
              <img src={jsIcon} alt="JavaScript" />
              JavaScript
            </span>
            <span>
              {' '}
              <img src={reactIcon} alt="React" />
              React
            </span>
            <span>
              {' '}
              <img src={reduxIcon} alt="Redux" />
              Redux
            </span>
            <span>
              {' '}
              <img src={nodeIcon} alt="Node" />
              Node
            </span>

            <span>
              {' '}
              <img src={mongoIcon} alt="MongoDB" />
              MongoDB
            </span>

            <span>
              {' '}
              <img src={postmanIcon} alt="postman" />
              Postman
            </span>

            <span>
              {' '}
              <img src={htmlIcon} alt="HTML5" />
              HTML5
            </span>
            <span>
              {' '}
              <img src={cssIcon} alt="CSS3" />
              CSS3
            </span>
          </TechInfoContainer>
        </TechContainer>
      </PageContainer>
    </>
  )
}

export default About

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5em;
  margin: auto;
  h1 {
    font-size: 40px;
    color: #be5845;
    margin: 0;
    white-space: nowrap;
  }

  @media (max-width: 991px) {
    gap: 1em;
    h1 {
      display: flex;
      justify-content: center;
      padding: 0;
      text-align: center;
      margin-top: 0;
    }
  }
`

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  max-width: 1666px;
  width: 90%;
  margin: 40px 0 40px 0;

  @media (max-width: 991px) {
    grid-template-columns: none;
    grid-template-rows: 100px 1fr;
    max-width: 800px;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  p {
    font-size: 18px;
    font-weight: 300;
    a {
      color: #393939;
      text-decoration: none;
      letter-spacing: 0.15em;
      font-weight: bold;
      display: inline-block;
      padding: 5px 2px;
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
  }
`

const TechContainer = styled.div`
  display: grid;
  grid-template-columns: 310px 1fr;
  max-width: 1666px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 991px) {
    grid-template-columns: none;
    grid-template-rows: 120px 1fr;
  }
`

const TechInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  gap: 2em;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 46px;
  }
`
