import React from "react"
import { graphql, Link } from "gatsby"

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
        <Button>Gallery</Button>
        <Button>
          <Link to="#about">Contact</Link>
        </Button>
      </Row>
    </PageSection>

    {/* MAIN */}

    <PageSection id="about">
      <About />
    </PageSection>

    {/* ABOUT */}

    <PageSection id="latest">
      <InstagramSection data={props.data} />
    </PageSection>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          original
          username
          caption
          likes
        }
      }
    }
  }
`
