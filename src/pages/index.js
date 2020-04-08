import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import Row from "../components/RowItems"
import PageSection from "../components/PageSection"
import InstagramSection from "../components/InstagramSection/instagramSection"
import About from "../components/Pages/about"

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

    {/* MAIN */}

    <PageSection id="about">
      <h1>Contact</h1>
      <About />
    </PageSection>

    {/* ABOUT */}

    <PageSection id="latest">
      <h1>Latest on Instagram</h1>

      <InstagramSection data={props.data} />
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
