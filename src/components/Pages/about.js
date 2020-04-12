import React from "react"
import styled from "styled-components"
import Form from "../Form"

const AboutContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const AboutMe = styled.div`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 20px;
  @media (max-width: 1000px) {
    height: 100vh;
  }
`
const FormStyle = styled.div`
  width: 100%;
`

const about = props => {
  return (
    <AboutContainer>
      <AboutMe>
        <p>
          My Name is Jose, I also go by "Jay" or "JMG" which are my initials.
          I've always had a fascination for cameras, all types of cameras. From
          taking pictures to filming home movies with my parents Panasonic
          camrecorder with cassettes when I was younger.
          <br />
          <br />I started editing videos in 2012 with Vegas movie studio. I
          started profesional photography in 2015 with my first DSLR camera a
          Nikon D3100 and at the same time editing my own photos and videos.
          <br />
          <br />
          I've always had a passion for design and drawing, which led me to
          start experimenting with Graphic Design. Graphic Design allowed me to
          bridge my two passions to allow me to create Logos, Illustrations, and
          even Tattoos.
          <br />
          <br />
          Have any questions? Or would you like me to capture you next event?
          Fill out the form and i will get in touch with you.
        </p>
      </AboutMe>
      <FormStyle>
        <Form />
      </FormStyle>
    </AboutContainer>
  )
}

export default about
