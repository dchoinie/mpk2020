import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContent from "../components/homeContent"
import HomeTour from "../components/homeTour"
import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <HomeContent />
    <HomeTour />
  </Layout>
)

export default IndexPage
