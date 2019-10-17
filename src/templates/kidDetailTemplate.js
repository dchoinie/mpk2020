import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import KidDetail from "../components/kidDetail"

const kidDetailTemplate = ({ data }) => {
  return (
    <Layout>
      <KidDetail kid={data.contentfulKid} />
    </Layout>
  )
}

export const kidDetailQuery = graphql`
  query kidDetailQuery($slug: String!) {
    contentfulKid(slug: { eq: $slug }) {
      age
      bio {
        bio
      }
      birthday(formatString: "MMMM, DD YYYY")
      id
      instagram
      slug
      name
      headshot {
        fluid {
          src
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default kidDetailTemplate
