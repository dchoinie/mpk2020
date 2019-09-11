import React from "react"
import { Link } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Events from "../components/events"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Events />
  </Layout>
)

export default IndexPage
