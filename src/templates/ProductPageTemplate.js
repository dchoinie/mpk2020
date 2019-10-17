import React from "react"
import { graphql } from "gatsby"
import ProductDetail from "../components/ProductDetail"

const ProductPageTemplate = ({ data }) => {
  return (
    <div>
      <ProductDetail product={data.shopifyProduct} />
    </div>
  )
}

export const PRODUCT_QUERY = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      shopifyId
      description
      handle
      id
      tags
      title
      images {
        localFile {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      variants {
        price
        sku
        title
      }
    }
  }
`

export default ProductPageTemplate
