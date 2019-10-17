import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ product }) => {
  return (
    <article>
      <Link to="/">{product.title}</Link>
    </article>
  )
}

export default Product
