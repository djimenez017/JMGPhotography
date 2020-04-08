import React from "react"

import styled from "styled-components"
import Button from "../components/Button"
import variables from "../components/variables"

const Hidden = styled.p`
  display: none;
`
const FormStyle = styled.form`
  width: 60%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

const LabelStyle = styled.label``

const InputStyle = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
`
const TextAreaStyle = styled.textarea`
  font-family: ${variables.font};
  padding: 10px;
  height: 100px;
`

const form = () => {
  return (
    <FormStyle name="contact" method="POST" data-netlify="true">
      {/* this section is for the spam handler in netlify */}
      <Hidden>
        <LabelStyle>Don’t fill this out if you're human:</LabelStyle>
        <InputStyle name="bot-field" />
      </Hidden>
      {/* this section is for the spam handler in netlify */}
      <LabelStyle>Your Name:</LabelStyle>
      <InputStyle type="text" name="name" placeholder="John Smith" />
      <br />
      <LabelStyle>Your Email:</LabelStyle>
      <InputStyle type="email" name="email" placeholder="email@domain.com" />
      <br />
      <LabelStyle>Date:</LabelStyle>
      <InputStyle type="date" name="date" placeholder="mm/dd/yyyy" />
      <br />
      <LabelStyle>Message:</LabelStyle>
      <TextAreaStyle
        name="message"
        placeholder="Please enter any information regtarding the event. (Ex. Guest count, location, or other)"
      ></TextAreaStyle>
      <br />
      <Button type="submit">Send</Button>
    </FormStyle>
  )
}

export default form
