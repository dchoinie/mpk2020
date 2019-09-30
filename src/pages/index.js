import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSlider from "../components/heroSlider"
import HomeContent from "../components/homeContent"
import HomeTour from "../components/homeTour"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <HomeContent />
    <HomeTour />
  </Layout>
)

export default IndexPage
