import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ProductsListing from "./ProductListing"

const ProductDetail = ({ product }) => {
  return (
    <Layout>
      <h2>{product.title}</h2>
      {product.descriptionHtml}
    </Layout>
  )
}

export default ProductDetail
