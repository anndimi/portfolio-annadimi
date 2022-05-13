import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h3>Contact</h3>
      </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15vw;
  margin: 0 auto;
`
