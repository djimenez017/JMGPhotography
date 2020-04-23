import React from "react"

import styled from "styled-components"
import variables from "../variables"

const InstagramContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 80vh;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const SingleImage = styled.div`
  margin: 0 auto;
  width: 300px;
  max-height: 260px;
  background: white;
  padding: 10px;
  margin: 5px 5px;

  img {
    width: 100%;
    height: 220px;
  }

  p {
    margin: 0;
    color: black;
  }
`
const PostContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  text-align: left;
  padding: 3px;
`

const instagramSection = props => {
  //console.log(props.data.allInstaNode.edges)
  const InstagramPosts = props.data.allInstaNode.edges
  const Posts = InstagramPosts.map(post => {
    return (
      <SingleImage key={post.node.id}>
        <img src={post.node.original} />
        <PostContent>
          <a href="https://www.instagram.com/jmg.photography/" target="_blank">
            <p
              style={{ color: `${variables.accentColor}`, fontWeight: "bold" }}
            >
              @{post.node.username}
            </p>
          </a>
          <p>Likes: {post.node.likes}</p>
        </PostContent>
      </SingleImage>
    )
  })

  return (
    <>
      <InstagramContainer>{Posts}</InstagramContainer>
    </>
  )
}

export default instagramSection
