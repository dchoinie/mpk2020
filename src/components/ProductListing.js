import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          description
          descriptionHtml
          handle
          id
          title
          tags
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
            id
            title
          }
          publishedAt(formatString: "MMMM YY")
          shopifyId
        }
      }
    }
  }
`

const ProductsListing = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)

  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}

export default ProductsListing
