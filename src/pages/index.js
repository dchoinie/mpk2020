import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContent from "../components/homeContent"
import Carousel from "../components/carousel"

const IndexPage1 = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <HomeContent />
  </Layout>
)

export default IndexPage1
