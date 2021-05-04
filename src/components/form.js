import React from "react"
import styled from "styled-components"
import { device, primary } from "../styles/globalstyles"
import Button from "./button"

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  label {
    float: left;
    text-align: start;
    margin: 20px 0;
    font-size: 1.13rem;
  }
  label,
  input,
  textarea {
    width: 100%;
    outline: none;
  }
  input,
  textarea {
    padding: 10px 15px;
    font-size: 1rem;
  }
  textarea {
    min-height: 15vh;
  }
  button {
    width: 100%;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 50%;
  }
`
const Form = ({ formTitle, policy }) => {
  return (
    <FormWrapper
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <h2 style={{ textTransform: "uppercase" }}>{formTitle}</h2>
      <p>{policy}</p>
      <label htmlFor="name">Name</label>
      <input name="Name" />
      <label htmlFor="name">Email</label>
      <input name="email" type="email" />
      <label htmlFor="number">Phone Number</label>
      <input name="number" type="number" />
      <label htmlFor="message">Message</label>
      <textarea name="message" />
      <Button color={primary}>Submit</Button>
    </FormWrapper>
  )
}

export default Form
