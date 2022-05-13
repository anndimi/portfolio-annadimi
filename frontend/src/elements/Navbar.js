import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </NavbarContainer>
    </>
  )
}

export default NavBar

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15vw;
  height: 8vh;
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
    content: "";
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
