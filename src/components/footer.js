import React from "react"
import styled from "styled-components"
import { device } from "../styles/globalstyles"
export const FooterWrapper = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Copyright Lorient Skin Care
      <span>
        Powered By{" "}
        <a
          href="https://upliftdigitalsolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          Uplift DS
        </a>
      </span>
    </FooterWrapper>
  )
}

export default Footer
