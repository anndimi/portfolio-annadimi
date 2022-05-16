import React from 'react'
import styled from 'styled-components'

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
            <a href={user.html_url} target="_blank">
              GitHub
            </a>
            <a href={user.blog} target="_blank">
              LinkedIn
            </a>
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
  a {
    color: #393939;
    text-decoration: none;
    letter-spacing: 0.1em;
    display: inline-block;
    padding: 0 5px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
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
