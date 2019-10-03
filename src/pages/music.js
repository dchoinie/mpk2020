import React, { Component } from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Albums from "../components/albums"

export class music extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Music" />
        <Albums />
      </Layout>
    )
  }
}

export default music
