import React from 'react'
import styled from 'styled-components'
import githubIcon from '../assets/icons/github-icon.png'
import linkedinIcon from '../assets/icons/linkedin-icon.png'
import phoneIcon from '../assets/icons/phone-icon.png'
import mailIcon from '../assets/icons/mail-icon.png'

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
            <span>
              <img src={phoneIcon} alt="phonenumber" />
              +46 765811319
            </span>
            <span>
              <img src={mailIcon} alt="email" />
              {user.email}
            </span>
          </ContactContainer>
          <SocialMediaContainer>
            <h3>find me</h3>
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

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2vh 0 5vh 0;
  margin: 0 auto;
  width: 70%;

  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    letter-spacing: 0.1em;
  }
  img {
    width: 35px;
    vertical-align: middle;
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
