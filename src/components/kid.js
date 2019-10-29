import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const kid = ({ kid }) => {
  return (
    <Link to={`/${kid.slug}`} className="black">
      <h2>{kid.name}</h2>
      <Img fluid={kid.headshotStar.fluid} className="my-2" />
    </Link>
  )
}

export default kid
