import React from 'react'
import styled from 'styled-components'
import githubIcon from '../assets/icons/github-icon.png'
import linkedinIcon from '../assets/icons/linkedin-icon.png'

const Footer = ({ user }) => {
  return (
    <>
      <FooterWrapper>
        {/* <Divider>
          <span className="divider"></span> //
          <span className="divider"></span>
        </Divider> */}
        <FooterContainer>
          <ContactContainer>
            <h3>contact</h3>
            <span>+46 765811319</span>
            <span>{user.email}</span>
          </ContactContainer>
          <SocialMediaContainer>
            <h3>social media</h3>
            <SocialMedia>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="github" />
              </a>
              <a href={user.blog} target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </SocialMedia>
          </SocialMediaContainer>
        </FooterContainer>
      </FooterWrapper>
    </>
  )
}

export default Footer

const FooterWrapper = styled.div`
  .divider {
    border: 1px solid #393939;
    border-top: none;
    width: 30%;
  }
`

// const Divider = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2vh 0 5vh 0;
  margin: 0 auto;
  width: 70%;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    letter-spacing: 0.1em;
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  img {
    width: 46px;
    :hover {
      transform: scale(1.1);
    }
  }
`
