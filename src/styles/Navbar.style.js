import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-left: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-family: Raleway;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  padding-left: 250px;
`

export const NavbarExtendedContainer = styled.div``
