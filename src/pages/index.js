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
    <SEO
      title="Home"
      description="Hello there, I am a freelance photographer based in Los Angeles, CA. If you have any questions or you would like me to capture your next event. Send me an email to contact@jmg13.com and i will reach out to you with more details."
    />
    <PageSection id="home">
      <h1>JMG Photography</h1>
      <p>Phototgrapher. Graphic Designer. Illustrator. Editor</p>
      <Row>
        <Button>
          <Link to="/gallery">Gallery</Link>
        </Button>
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
          caption
          id
          likes
          original
          timestamp
          username
        }
      }
    }
  }
`
