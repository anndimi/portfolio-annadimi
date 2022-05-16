import React from 'react'
import styled from 'styled-components'

const About = ({ user }) => {
  return (
    <>
      <AboutContainer>
        <h1>this is me</h1>
        <InfoContainer>
          <p>
            I'm a frontend developer with a master in speech and language
            pathology. I love the combination of logic and creativity in
            programming! My current technological stack is: JavaScript(ES6),
            React Native, React-Redux, Node.js, CSS3, HTML5, Github, APIs, REST
            APIs.
          </p>

          <p>
            Born in Sweden and raised in Greece. I moved back to Sweden in 2008
            to study and make something of myself. As a girl (growing up in
            Greece) it never crossed my mind to study programming, because "it
            was something that only boys do". And growing up in a segregated
            culture, like the Greek one, you don't think twice about those
            things because that’s the norm. Despite that I used to spend, and
            continue spending, the majority of my waking time in front of my PC;
            playing video games mostly. One could say that my PC is a natural
            extension to myself.
          </p>

          <p>
            I was working as a speech and language pathologist for 3 years and
            realised that it’s not what I want to do for the rest of my life. So
            I handed in my notice and decided to change direction in my career
            and try coding! I fell in love with it on the spot. I mean, it's
            like playing video games so what is there not to love?! Furthermore
            I really enjoy the problem solving aspect and the “aha” moments of
            understanding how things work (or why they don’t!).
          </p>

          <p>
            Throughout my various working experiences I’ve learned to cope with
            stress and fast paced working environments, where quick decision
            making, problem solving and flexibility is essential. I always
            strive to improve as a person and get better at what I do.
          </p>

          <p>Feel free to contact me if you want to know more!</p>
        </InfoContainer>
      </AboutContainer>
    </>
  )
}

export default About

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5em;
  margin: 0 auto;
  h1 {
    font-size: 40px;
    color: #be5845;
  }
`

const InfoContainer = styled.div`
  width: 50%;
`
