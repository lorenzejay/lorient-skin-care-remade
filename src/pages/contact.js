import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
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
      facial: file(relativePath: { eq: "facial2.jpg" }) {
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
        <Form
          formTitle="Schedule Your Appointment"
          policy="Enter your date and package in the message below. We will contact you within the next 24 hours."
        />
      </ContactWrapper>
    </Layout>
  )
}

export default Contact
