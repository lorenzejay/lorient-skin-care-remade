import { graphql, Link as LinkG, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
// import { device, primary } from "../styles/globalstyles"

export const Nav = styled.header`
  //handle transitions here
  /* background: #fff; */
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 60;
  @media screen and (min-width: 768px){
    padding: 0 3rem;
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 12px;
  /* max-width: 1100px; */
`

//we are grabbing the link from gatsby link
export const NavLink = styled(LinkG)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 6px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

//scroll links
export const NavLinks = styled(LinkG)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

const Header = ({ siteTitle, toggle }) => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "logopng2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLink className="text-base" to="/">
            <img
              src={data.facial.childImageSharp.fluid.src}
              alt="logo"
              style={{ width: "40px", objectFit:'cover' }}
            />
          </NavLink>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/book">Book Now</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
