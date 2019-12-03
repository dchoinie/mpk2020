import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

export const partnersQuery = graphql`
  {
    koba: file(relativePath: { eq: "partners/koba-logo.png" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    sickkids: file(relativePath: { eq: "partners/sick-kids.png" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    ypad: file(relativePath: { eq: "partners/YPAD.png" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    travellingStage: file(
      relativePath: { eq: "partners/travellingStage.jpg" }
    ) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    paquin: file(relativePath: { eq: "partners/paquin.jpg" }) {
      childImageSharp {
        fluid {
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
      <PageTitle title="Partners" />
      <div id="partners-container">
        <Img fluid={data.koba.childImageSharp.fluid} />
        <Img fluid={data.sickkids.childImageSharp.fluid} />
        <Img fluid={data.ypad.childImageSharp.fluid} />
        <Img fluid={data.travellingStage.childImageSharp.fluid} />
        <Img fluid={data.paquin.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}
