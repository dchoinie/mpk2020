import React, { Component } from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Albums from "../components/albums"
import SEO from "../components/seo"

export class music extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Music" />
        <PageTitle title="Music" />
        <Albums />
      </Layout>
    )
  }
}

export default music
