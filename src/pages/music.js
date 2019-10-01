import React, { Component } from "react"
import Layout from "../components/layout"
import Albums from "../components/albums"

export class music extends Component {
  render() {
    return (
      <Layout>
        <Albums />
      </Layout>
    )
  }
}

export default music
