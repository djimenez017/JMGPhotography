import React from "react"

import styled from "styled-components"
import Button from "../components/Button"
import Card from "../components/Card"
import variables from "../components/variables"

const Hidden = styled.p`
  display: none;
`
const FormStyle = styled.form`
  width: 100%;
  margin: 0 auto;
  background-color: orange;
`

const LabelStyle = styled.label`
font-weight: bold;
width: 100%;
max-width: 400px;
`

const InputStyle = styled.input`
padding: 5px;
border-radius: 5px;
border: none;
width: 80%;
max-width: 280px;

`

const StyledP = styled.p`
width: 450px;
`
const TextAreaStyle = styled.textarea`
width: 100%;
max-width: 290px;
`

const form = () => {
  return (
    <Card>
    <FormStyle name="contact" method="POST" data-netlify="true">
      {/* this section is for the spam handler in netlify */}
      <Hidden>
        <LabelStyle>
          Don’t fill this out if you're human: <InputStyle name="bot-field" />
        </LabelStyle>
      </Hidden>
      {/* this section is for the spam handler in netlify */}
      <StyledP>
        <LabelStyle>
          Your Name:<br /> <InputStyle type="text" name="name" placeholder="John Smith"/>
        </LabelStyle>
      </StyledP>
      <StyledP>
        <LabelStyle>
          Your Email: <br/> <InputStyle type="email" name="email" placeholder="emial@domain.com" />
        </LabelStyle>
      </StyledP>
      <StyledP>
        <LabelStyle>
          Date: <br/> <InputStyle type="date" name="date" placeholder="mm/dd/yyyy" />
        </LabelStyle>
      </StyledP>
      <StyledP>
        <LabelStyle>
          Message:<br/><TextAreaStyle name="message" placeholder="Please enter any information regtarding the event. (Ex. Guest count, location, or other)"></TextAreaStyle>
        </LabelStyle>
      </StyledP>
      <StyledP>
        <Button type="submit">Send</Button>
      </StyledP>
    </FormStyle>
    </Card >
  )
}

export default form
