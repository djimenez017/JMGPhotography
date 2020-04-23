import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Modal from "../components/modal"

const ImageGallery = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  overflow-x:hidden;

 

  img {
    width: calc(100% / 3);
    grayscale(100%);
  	filter: grayscale(70%);
  	-webkit-transition: .1s ease-in-out;
    transition: .1s ease-in-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 
  }

  img:hover {
    z-index: 700;
  	-webkit-transition: .1s ease-in-out;
  	transition: .1s ease-in-out;
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9);
 
  }

  @media (max-width: 490px) {
    top: 7vh;

    img {
      width: calc(100% / 2);
      grayscale(0);
	    filter: grayscale(0);
    }

    img:hover {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media (max-width: 1000px) {
    top: 7vh;
  }
`

const GalleryPage = props => {
  const [showModal, setShowModal] = useState(true)

  const AllImages = props.data.allImageSharp.nodes

  const Images = AllImages.map(image => {
    console.log(showModal)
    return (
      <img
        key={image.id}
        src={image.fluid.src}
        alt=""
        onClick={() => setShowModal(!showModal)}
      />
    )
  })

  return (
    <Layout>
      <SEO
        title="Photo Gallery"
        description="A showcase of the many photographs i have taken. Would you like me to shoot your next event? Send me an email to contact@jmg13.com"
      />
      <ImageGallery>{Images}</ImageGallery>
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
