import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import Row from "../components/RowItems"
import SocialMediaIcons from "../components/SocialMediaIcons"
import PageSection from "../components/PageSection"
import Card from "../components/Card"
import Form from "../components/Form"
import InstagramSection from "../components/InstagramSection/instagramSection"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <PageSection id="home">
      <h1>JMG Photography</h1>
      <p>Phototgrapher. Graphic Designer. Illustrator. Editor</p>
      <Row>
        <Button>About Me</Button>
        <Button>Contact</Button>
      </Row>
    </PageSection>
    <PageSection id="services">
      <h1>Latest on Instagram</h1>

      <InstagramSection data={props.data} />
    </PageSection>
    <PageSection id="about">
      <h1>About me:</h1>

      <Card>
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
        </p>
      </Card>
    </PageSection>
    <PageSection id="contact">
      <h1>Contact</h1>
      <Form />
    </PageSection>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          timestamp
          username
          likes
          original
        }
      }
    }
  }
`
