import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { device, primary, secondary } from "../styles/globalstyles"

export const Testimonial = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background: ${primary};
  .testimonial-title {
    padding: 5%;
    text-align: center;
    h2,
    p {
      text-transform: uppercase;
      font-weight: 400;
    }
  }
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: space-evenly;
    .testimonial-title {
      span {
        color: ${secondary};
      }
    }
  }
  @media ${device.laptop} {
    height: 65vh;
    padding: 2%;
    flex-direction: row;
    justify-content: space-between;
    .testimonial-title {
      text-align: start;

      h2 {
        font-size: 2.2rem;
      }
    }
  }
`

export const SliderStyled = styled(Slider)`
  width: 50%;
  outline: none;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .testimonial-quote-image {
    width: 50px;
    margin: 5vh auto;
  }
  .testimonial-client-image {
    width: 135px;
    height: 135px;
    margin: 3vh auto;
    object-fit: cover;
    border-radius: 50%;
  }
  @media ${device.mobileS} {
    width: 80%;
    margin: 5vh auto;
    h3,
    h4,
    p {
      text-align: center;
      font-weight: 400;
    }
  }
  @media ${device.laptop} {
    width: 50%;

    .testimonial-client-image {
      width: 75px;
      height: 75px;
      margin: 3vh auto;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allTestimonialsJson {
        edges {
          node {
            id
            name
            description
            imageSrc {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
      facial: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facial2: file(relativePath: { eq: "facial1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(data.allTestimonialsJson)
  return (
    <Testimonial>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"
        />
      </Helmet>
      <div className="testimonial-title">
        <h2>
          Client <span>Says</span>
        </h2>
        <p>Testimonials</p>
      </div>
      <>
        <SliderStyled {...settings}>
          {data.allTestimonialsJson.edges.map(({ node }) => {
            return (
              <div>
                <img
                  className="testimonial-client-image"
                  src={node.imageSrc.childImageSharp.fluid.src}
                  alt="testimonial-autor"
                />
                <h3>{node.name}</h3>
                {/* <h4>Customer</h4> */}
                <p>{node.description}</p>
                <img
                  className="testimonial-quote-image"
                  src={data.facial.childImageSharp.fluid.src}
                  alt={"testimonial author"}
                  title={node.title}
                />
              </div>
            )
          })}
        </SliderStyled>
      </>
    </Testimonial>
  )
}

export default Testimonials
