import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const ambassadorImage = graphql`
  {
    ambassador: file(relativePath: { eq: "ambassador/Slider-Ambassador.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ambassador = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex mt-12">
          <Img
            fluid={data.ambassador.childImageSharp.fluid}
            className="w-full"
          />
        </div>
        <div className="flex">
          <iframe
            title="Ambassador"
            height="3800"
            width="100%"
            frameborder="0"
            style={{ width: "100%", overflow: "hidden", border: "none" }}
            src="https://minipopkidsambassadorprogram.castingcrane.com/embed"
            allow="microphone; camera"
          >
            <a href="https://minipopkidsambassadorprogram.castingcrane.com/">
              Fill out the Mini Pop Kids | Ambassador Program form
            </a>
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Ambassador
