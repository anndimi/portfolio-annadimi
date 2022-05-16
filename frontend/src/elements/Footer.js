import React from 'react'
import styled from 'styled-components'

const Footer = ({ user }) => {
  return (
    <>
      <FooterContainer>
        <h3>Contact</h3>
        <FooterInfoContainer>
          <span>+46 765811319</span>
          <span>{user.email}</span>
          <span>{user.company}</span>
        </FooterInfoContainer>
      </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vh 0 5vh 0;
  margin: 0 auto;
  h3 {
    text-align: center;
  }
`

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
