import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ImageGallery = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  position: relative;

  img {
    width: calc(100% / 3);
  }

  @media (max-width: 490px) {
    top: 10vh;

    img {
      width: calc(100% / 2);
    }
  }

  @media (max-width: 1000px) {
    top: 10vh;
  }
`

const GalleryPage = props => {
  const AllImages = props.data.allImageSharp.nodes
  console.log(props)
  const Images = AllImages.map(image => {
    return <img key={image.id} src={image.fluid.src} alt="" />
  })

  return (
    <Layout>
      <SEO title="Photo Gallery" />
      <ImageGallery> {Images}</ImageGallery>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        id
        fluid(maxWidth: 400, maxHeight: 250) {
          src
        }
      }
    }
  }
`

export default GalleryPage
