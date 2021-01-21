import React from "react"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"
import { graphql, Link, useStaticQuery } from "gatsby"
export const FeaturedGrid = styled.section`
  width: 100%;

  margin: 5vh 0;
  .featured-head {
    align-self: flex-start;
    padding: 0 5%;
    margin: 5vh 0;
    h2,
    p {
      font-weight: 400;
      text-align: left;
    }
    h2 {
      color: ${primary};
      text-transform: uppercase;
      letter-spacing: 5px;
      span {
        color: #333;
      }
    }
  }
  @media ${device.mobileS} {
    .featured-card-container {
      display: flex;
      flex-direction: column;
    }
    .featured-main-image {
      display: none;
    }
  }

  @media ${device.laptop} {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;

    gap: 0;
    padding: 0;
    margin: auto 0;

    .featured-head {
      display: none;
    }
    .featured-main-image {
      display: inline-block;
      width: 50%;
      height: 100%;
      object-fit: cover;
    }
    h2 {
      margin-top: 25vh;
      font-size: 2.2rem;
    }
    .featured-card-container {
      padding: 0;
      display: grid;
      width: 50%;
      height: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
      margin: 0;
    }
  }
  @media ${device.laptopL} {
    height: 80vh;
  }
`

export const FeaturedCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-direction: column;
  padding: 10%;
  h3 {
    text-transform: uppercase;
  }
  hr {
    width: 50%;
    margin: 15px;
  }
  &:hover {
    background-color: #ffd5c8;
  }
  @media ${device.mobileS} {
    background-color: ${props => (props.id % 2 === 0 ? "#f9a392" : "#231F22")};
    img {
      width: 50px;
      margin-bottom: 3vh;
    }
    h3,
    p {
      color: ${props => (props.id % 2 === 0 ? "#333" : "whitesmoke")};
    }
  }
  @media ${device.laptop} {
    background-color: ${props =>
      props.contrast === true ? "#f9a392" : "#231F22"} !important;
    /* width: 400px;
    height: 330px; */
    width: 100%;
    height: 100%;
    padding: 0 2%;
    hr {
      width: 85%;
    }
    h3,
    p {
      color: ${props => (props.contrast === true ? "#333" : "whitesmoke")};
    }

    p {
      width: 85%;
    }
  }
`

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      allServicesJson {
        nodes {
          id
          title
          contrast
          slug
          shortDescription
          benefits
          icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
      facialMain: file(relativePath: { eq: "facial9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 19020, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial1: file(relativePath: { eq: "woman.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial2: file(relativePath: { eq: "bamboo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial3: file(relativePath: { eq: "cream.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial4: file(relativePath: { eq: "towels.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const services = data.allServicesJson.nodes
  return (
    <FeaturedGrid>
      <div className="featured-head">
        <h2>
          What we <span>Do</span>
        </h2>
        <p>The Best Services</p>
      </div>
      <img
        className="featured-main-image"
        src={data.facialMain.childImageSharp.fluid.src}
        alt="facial being done"
      />
      <div className="featured-card-container">
        {services.map((service, i) => {
          console.log(service)
          return (
            <Link to={service.slug} key={service.id}>
              <FeaturedCard contrast={service.contrast} id={service.id}>
                <img
                  src={service.icon.childImageSharp.fluid.src}
                  alt="facial-icons"
                />
                <h3>{service.title}</h3>
                <hr />
                <p>{service.shortDescription}</p>
              </FeaturedCard>
            </Link>
          )
        })}
      </div>
    </FeaturedGrid>
  )
}

export default Features
