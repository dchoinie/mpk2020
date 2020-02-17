import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ TourDate }) => {
  return (
    <Link to={`/${TourDate.data.slug}`}>
      <h2>{TourDate.data.city}</h2>
    </Link>
  )
}
