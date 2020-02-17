import React from "react"
import Layout from "../components/layout"
import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  handleAuthentication()

  return (
    <Layout>
      <h2>Loading...</h2>
    </Layout>
  )
}

export default Callback
