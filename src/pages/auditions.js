import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export default () => {
  return (
    <Layout>
      <PageTitle title="Auditions" />
      <iframe
        height="4000"
        width="100%"
        frameborder="0"
        style={{ width: "100%", overflow: "hidden", border: "none" }}
        src="https://minipopkidsauditions2020.castingcrane.com/embed"
        allow="microphone; camera"
      >
        <a href="https://minipopkidsauditions2020.castingcrane.com/">
          Fill out the Mini Pop Kids Auditions 2020 form
        </a>
      </iframe>
    </Layout>
  )
}
