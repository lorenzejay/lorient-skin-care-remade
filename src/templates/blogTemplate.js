import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Hero from "../components/hero"

export const BTemplateWrapper = styled.section`
  margin-top: 12vh;
  padding: 5%;
  h1,
  h2 {
    font-weight: 400;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Hero image={frontmatter.featuredImage.childImageSharp.fluid.src} />
      <BTemplateWrapper className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <p>{frontmatter.author}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </BTemplateWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
