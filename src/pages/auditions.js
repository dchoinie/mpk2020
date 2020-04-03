import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const auditionsImage = graphql`
  {
    auditions: file(relativePath: { eq: "auditions.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Auditions" />
      <Img fluid={data.auditions.childImageSharp.fluid} className="my-4" />
      <iframe
        height="6000"
        width="100%"
        frameborder="0"
        style={{ width: "100%", overflow: "hidden", border: "none" }}
        src="https://minipopkids2020round2.castingcrane.com/embed"
        allow="microphone; camera"
      >
        <a href="https://minipopkids2020round2.castingcrane.com/">
          Fill out the Mini Pop Kids Auditions 2020 form
        </a>
      </iframe>
    </Layout>
  )
}
