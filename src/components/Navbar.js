import React from 'react'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
} from '../styles/Navbar.style'
import LogoImg from '../assets/logo.png'
import Currency from '../assets/currency.png'
import Cart from '../assets/cart.png'

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">WOMAN</NavbarLink>
            <NavbarLink to="/men">MEN</NavbarLink>
            <NavbarLink to="/kids">KIDS</NavbarLink>
            <Logo src={LogoImg}></Logo>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink to="/">
            <Logo src={Currency}></Logo>
          </NavbarLink>
          <NavbarLink to="/">
            <Logo src={Cart}></Logo>
          </NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  )
}

export default Navbar
