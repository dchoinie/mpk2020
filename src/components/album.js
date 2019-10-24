import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ album }) => {
  return (
    <Link to={`/music/${album.slug}`} className="black">
      <h2>{album.title}</h2>
      <h6>{album.releaseDate}</h6>
      <Img fluid={album.cover.fluid} />
    </Link>
  )
}
