import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"
import { Link } from "gatsby"
import Button from "./button"

export const HeroContainer = styled(BackgroundImage)`
  width: 100%;
  opacity: 1 !important;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-position: center;
  @media ${device.mobileS} {
    height: 55vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-size: cover;
    background-position: center; */
    text-align: center;

    padding: 5%;
    h4 {
      color: white;
      font-weight: 300;
      margin-bottom: 15px;
      text-align: center;
    }
    a {
      color: #333;
    }
    h4 {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.7rem;
      margin: ${props =>
        props.forComponent === true ? "10vh 0" : "15vh 0 2vh"};
      color: white;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  @media ${device.laptop} {
    height: 72vh;
    background-size: contain;
    background-repeat: no-repeat;
    h1 {
      font-size: 3rem;
      letter-spacing: 3px;
    }
    h4 {
      font-size: 2rem;
    }
  }
`

const Hero = ({
  image,
  bigText,
  smallText,
  buttonText,
  buttonLink,
  forComponent,
}) => {
  return (
    <HeroContainer
      fluid={image}
      backgroundColor={`#040e18`}
      forComponent={forComponent}
    >
      <h1>{bigText}</h1>
      <h4>{smallText}</h4>
      {buttonText && (
        <Button color={primary}>
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      )}
    </HeroContainer>
  )
}

export default Hero
