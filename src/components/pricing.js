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
      align-items: flex-start;
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
  margin: 0px auto;
  @media ${device.mobileS} {
    padding: 5%;
    .card-title {
      min-height: 20vh;
      padding: 10px 0;
      width: auto;
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
      height: auto;
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
            <p>From $150/month</p>
            <p>Annually: $125/month</p>
          </div>
          <div className="card-services">
            <ul>
              <li>2 Cleansing Wash Facials</li>
              <li>Light Extraction</li>
              <li>Rejuvenating Mask Peel</li>
              <li>$15 Reschedule Fee</li>
              <li>25% Off Signature Facials and 50% off any additional facial.</li>
              <li>Great for keeping your skin fresh and prevent breakouts.</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Platinum</h3>
            <p>From $250/month</p>
            <p>Annually: $225/month</p>
          </div>
          <div className="card-services">
            <ul>
              <li>1 Signature Facial</li>
              <li>2 Cleansing Facials</li>
              <li>Glowing Mask</li>
              <li>Exfoliating Mask</li>
              <li>Soothing Protective Balm</li>
              <li>Best for those with more severe acne and skin conditions.</li>
            </ul>
          </div>
        </PricingCards>
        <PricingCards>
          <div className="card-title">
            <h3>Diamond</h3>            
              <p>From $350/month</p>
              <p>Annually: $325/month</p>
          </div>
          <div className="card-services">
            <ul>
              <li>2 Signature Facials</li>
              <li>2 Cleansing Wash</li>
              <li>Gua-sha Massage</li>
              <li>Facial Massage</li>
              <li>Cooling Ice Globe</li>
              <li>For those who love keeping their youthful look and need weekly professional sessions. </li>
            </ul>
          </div>
        </PricingCards>
      </div>
    </PricingSection>
  )
}

export default Pricing
