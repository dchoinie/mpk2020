import React from "react"
import Layout from "../components/layout"
import ProductListing from "../components/ProductListing"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <ProductListing />
    </Layout>
  )
}
