import React, { Component } from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export class tour extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <PageTitle />
      </Layout>
    )
  }
}

export default tour
