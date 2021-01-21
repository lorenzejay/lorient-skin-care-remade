import React from "react"
import styled from "styled-components"
import { device } from "../styles/globalstyles"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const WelcomeContainer = styled.section`
  display: block;
  margin: 10vh 0;
  padding: 0 5%;
  width: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${device.mobileS} {
    padding: 0;
    img {
      width: 40%;
    }
    .welcome-text {
      h1,
      h4 {
        font-weight: 700;
        text-transform: uppercase;
      }
      h1 {
        font-size: 2.8rem;
        letter-spacing: 5px;
      }
      h4 {
        font-size: 1.3rem;
      }
      p {
        margin-top: 5vh;
        font-size: 0.95rem;
        text-align: center;
        width: 85%;
      }
    }
  }
  @media ${device.laptop} {
    img {
      width: 150px;
    }
    .welcome-text {
      h1 {
        font-size: 4rem;
      }
      p {
        width: 50%;
        font-size: 1.4rem;
      }
    }
  }
`
export const HeroContainer = styled(BackgroundImage)`
  @media ${device.mobileS} {
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    object-fit: cover;
    /* padding: 5%; */
    background-size: 100%;

    h2,
    h1,
    a {
      color: #333;
      font-weight: 700;
      margin-bottom: 15px;
    }
    h2 {
      text-transform: uppercase;
    }
    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
      }
    }
  }
  @media ${device.laptop} {
    width: 50%;
    height: auto;
  }
`

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "logopng2.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <WelcomeContainer>
      <div className="welcome-text">
        {/* <HeroContainer
          fluid={data.facial.childImageSharp.fluid}
          objectFit="cover"
        >
          <h1>Welcome</h1>

          <h4>Lorient Skin Care</h4>
        </HeroContainer> */}
        <img src={data.facial.childImageSharp.fluid.src} />

        <p>
          L'ORIENT Skin Care specializes in facial skin care treatmenet. We
          target your specific concerns and issues of your skin. We tailor every
          facial for your specific needs and leave your skin glowing and looking
          its best.
        </p>
      </div>
    </WelcomeContainer>
  )
}

export default Welcome
