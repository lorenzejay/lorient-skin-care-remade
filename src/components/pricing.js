import React from "react"
import styled from "styled-components"
import { device, secondary } from "../styles/globalstyles"

export const PricingSection = styled.section`
  margin-bottom: 5vh;
  @media ${device.mobileS} {
    .pricing-title {
      padding: 5%;
      h2 {
        font-weight: 400;
        text-transform: uppercase;
      }
    }
    .pricing-cards-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
  @media ${device.laptop} {
    .pricing-cards-container {
      flex-direction: row;
    }
    .pricing-title {
      font-size: 2.2rem;
    }
  }
`
export const PricingCards = styled.div`
  @media ${device.mobileS} {
    padding: 5%;
    .card-title {
      height: 15vh;

      width: 75vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #333;
      gap: 2vh;
      h3 {
        font-size: 1.8rem;
        color: ${secondary};
      }
      h3,
      p {
        text-transform: uppercase;
      }
      p {
        color: whitesmoke;
      }
    }
    ul {
      list-style: none;
      li {
        padding: 5%;
        text-align: center;
        font-size: 1.2rem;
      }
      li:nth-child(odd) {
        background: #fff1ed;
      }
      li:nth-child(even) {
        background: #ffe6de;
      }
    }
  }
  @media ${device.laptop} {
    .card-title {
      width: 23vw;
    }
  }
`
const Pricing = () => {
  return (
    <PricingSection>
      <div className="pricing-title">
        <h2>Our Packages</h2>
      </div>
      <div className="pricing-cards-container">
        <PricingCards>
          <div className="card-title">
            <h3>Gold</h3>
            <p>From $99</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Double Cleaning Wash</li>
              <li>Basic Extraction</li>
              <li>Basic Mask Peel</li>
              <li>UV Light Treatment</li>
              <li>Face and Arm Lotion</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Platinum</h3>
            <p>From $150</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Customized Facial</li>
              <li>Microdermabrasion</li>
              <li>Glowing Mask</li>
              <li>Exfoliation</li>
              <li>Soothing Protective Balm</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Diamond</h3>
            <p>From $250</p>
          </div>
          <div className="card-services">
            <ul>
              <li>Anti-Aging Facial</li>
              <li>Chemical Peel</li>
              <li>Gua-sha Massage</li>
              <li>Facial Massage</li>
              <li>Cooling Ice Globe</li>
            </ul>
          </div>
        </PricingCards>
      </div>
    </PricingSection>
  )
}

export default Pricing
