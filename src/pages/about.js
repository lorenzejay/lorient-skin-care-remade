import React from "react"
import styled from "styled-components"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { device, secondary } from "../styles/globalstyles"

export const AboutWrapper = styled.section`
  padding: 5%;

  width: 100%;
  margin-top: 10vh;
  h2 {
    text-transform: uppercase;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-space-between;
    h2 {
      font-size: 1.6rem;
      margin: 3.5vh 0;
    }
    p {
      line-height: 2rem;
      font-size: 1.2rem;
      margin: 15px;
      text-align: start;
      margin-right: auto;
    }
    ul {
      list-style: none;
      width: 100%;
      float: left;
      margin: 5vh 0;
      li {
        line-height: 2.2rem;
        font-size: 1.3rem;
        &::before {
          content: "•   ";
          color: red;
          font-weight: bold;
          align-self: flex-start;
          display: inline-block;
        }
      }
    }
  }
`
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial7-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero
        image={data.facial.childImageSharp.fluid}
        bigText="About L'orient"
        forComponent={true}
      />

      <AboutWrapper>
        <h2>
          {" "}
          <span style={{ color: secondary }}>Who</span> we are
        </h2>
        <p>
          L'ORIENT SKINCARE specializes in a facial skin care treament that
          involves customized treatment meant to target your specific concerns
          and issues.
        </p>
        <p style={{fontWeight:'bold'}}>
          We tailor every facial to keep yopur skin glowing and look its best.
        </p>
        <p>
          Enhance each guest by bringing out your inner beauty and confidence.
          My mission is is to keep your skin healthy, youthful and glowing.
        </p>
        <h2>Services include</h2>
        <ul>
          <li>Anti-Aging Facial</li>
          <li>Microdermabrasion</li>
          <li>Extractions</li>
          <li>Mask Treatment</li>
        </ul>
        <h2>Great for those who:</h2>
        <ul>
          <li>Want to look and feel younger</li>
          <li>Want to regain confidence</li>
          <li>Have a special occasion like a wedding or party</li>
          <li>Maintenance</li>
        </ul>
      </AboutWrapper>
    </Layout>
  )
}

export default About
