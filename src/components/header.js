import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  z-index: 90;
  width: 100%;
  height: 12vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  background-color: transparent;
  .logo,
  a {
    font-weight: 400;
  }
  .logo {
    text-transform: uppercase;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    list-style: none;
    li {
      a {
        font-size: 1.2rem;
        color: ${primary};
      }
    }
  }

  @media ${device.mobileS} {
    .logo {
      font-size: 20px;
      color: whitesmoke;
    }
    img {
      width: 40px;
    }
    ul {
      width: 50%;
      li {
        a {
          font-size: 0.85rem;
        }
      }
    }
  }

  @media ${device.laptop} {
    .logo {
      font-size: 2rem;
    }
    img {
      width: 60px;
    }
    ul {
      width: 30%;
      li {
        a {
          font-size: 1.2rem;
          letter-spacing: 3px;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => {
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
    <Nav className="bg-light">
      {/* <Link className="logo" to="/">
      {siteTitle}
    </Link> */}
      <Link to="/">
        <img src={data.facial.childImageSharp.fluid.src} alt="logo" />
      </Link>
      <ul className="text-color-secondary">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact" className="btn btn-sm btn-secondary text-light">
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
