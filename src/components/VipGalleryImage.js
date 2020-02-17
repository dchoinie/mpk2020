import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "Galleries.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
  )
}
