import React from "react"
import { Link } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
