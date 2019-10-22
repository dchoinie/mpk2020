import React from "react"
import Img from "gatsby-image"
import Link from "gatsby"

const kid = ({ kid }) => {
  return (
    <div>
      <h2>{kid.name}</h2>
      <Img fluid={kid.headshot.fluid} className="my-2" />
    </div>
  )
}

export default kid
