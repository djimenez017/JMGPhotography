import React from "react"

import styled from "styled-components"

const InstagramContainer = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 90vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`
const SingleImage = styled.div`
  margin: 0 auto;
  width: 300px;
  background: white;
  padding: 5px;
  margin: 3px 10px;

  img {
    width: 100%;
    height: 230px;
  }

  p {
    margin: 0;
    color: black;
  }
`

const instagramSection = props => {
  console.log(props.data.allInstaNode.edges)
  const InstagramPosts = props.data.allInstaNode.edges
  const Posts = InstagramPosts.map(post => {
    console.log(post)
    return (
      <SingleImage key={post.node.id}>
        <img src={post.node.original} />
        <p>Likes: {post.node.likes}</p>
      </SingleImage>
    )
  })

  return <InstagramContainer>{Posts}</InstagramContainer>
}

export default instagramSection
