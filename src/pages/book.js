import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import BookNow from "../components/bookNow"
import Form from "../components/form"
import Hero from "../components/hero"
import Layout from "../components/layout"

export const ContactWrapper = styled.section`
  padding: 5%;
  margin-top: 12vh;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      facial: file(relativePath: { eq: "facial2-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero bigText="Contact Us" image={data.facial.childImageSharp.fluid} />
      <ContactWrapper>
       
        <BookNow />
        <Form formTitle='Questions?' policy='If you have any other questions, fill up the form below. I will do my best to reach back to you within 24 hours. '/>
      </ContactWrapper>
    </Layout>
  )
}

export default Contact
