import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Kids from "../components/kids"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Meet The MPK" />
      <PageTitle title="Meet The Mini Pop Kids" />
      <Kids />
    </Layout>
  )
}
