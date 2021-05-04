import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../styles/globalstyles"
import Welcome from "../components/welcome"
import Testimonials from "../components/testimonials"
import Pricing from "../components/pricing"
import BookNow from "../components/bookNow"
// import Button from "../components/button"

export const HomePageContentPadding = styled.section`
  @media ${device.laptop} {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Los Angeles Skin Care Specialist and Licensed Esthetician."
        description="Licenced Esthetician specializing in keeping skin youthful, glowing and healthy. Pimple Extraction, healing facial mask, and one of the best facials in Los Angeles. "
      />
      <Hero
        image={data.facial.childImageSharp.fluid}
        bigText="L'orient"
        smallText="Keeping your skin healthy, youthful and glowing."
        buttonLink="/about"
        buttonText="Learn More"
      />
      <Welcome />
      <Features />
      <Pricing />
      <BookNow />

      <Testimonials />
    </Layout>
  )
}
export default IndexPage
