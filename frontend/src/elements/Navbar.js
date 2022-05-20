import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleToggle = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      {window.innerWidth < 900 ? (
        <HamburgerContainer>
          <HamburgerButton onClick={handleToggle}>
            {hamburgerOpen ? '/close menu' : '/open menu'}
          </HamburgerButton>
          {hamburgerOpen ? (
            <HamburgerMenuContainer>
              <Link to="/" onClick={() => setHamburgerOpen(false)}>
                / Home /
              </Link>
              <Link to="/projects" onClick={() => setHamburgerOpen(false)}>
                / Projects /
              </Link>
              <Link to="/about" onClick={() => setHamburgerOpen(false)}>
                / About /
              </Link>
              <Link to="/contact" onClick={() => setHamburgerOpen(false)}>
                / Contact /
              </Link>
            </HamburgerMenuContainer>
          ) : null}
        </HamburgerContainer>
      ) : (
        <NavbarContainer>
          <Link to="/">/ Home /</Link>
          <Link to="/projects">/ Projects /</Link>
          <Link to="/about">/ About /</Link>
          <Link to="/contact">/ Contact /</Link>
        </NavbarContainer>
      )}
    </>
  )
}

export default NavBar

const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 35px 0;
`

const HamburgerButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px;
  outline: 0;
  border: none;
  border-bottom: 2px solid #393939;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  width: 80%;
  align-self: center;
  font-family: inherit;
  margin-bottom: 10px;
`

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  a {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5vw;
  padding: 3vh 0 3vh 0;
  margin: 0 auto;
  a {
    color: #393939;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-weight: bold;
    display: inline-block;
    padding: 15px 20px;
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

  @media (max-width: 991px) {
    gap: 2vw;
    padding: 3vh 0 0 0;
    justify-content: center;
  }
`
