import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <article>
      <h3>{product.title}</h3>
      {/* <Img fluid={product.images.localFile.childImageSharp.fluid} /> */}
    </article>
  )
}

export default Product
