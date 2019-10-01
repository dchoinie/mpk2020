import React from "react"
import Img from "gatsby-image"

export default ({ album }) => {
  return (
    <div>
      <h2>{album.title}</h2>
      <h6>{album.releaseDate}</h6>
      <Img fluid={album.cover.fluid} />
    </div>
  )
}
