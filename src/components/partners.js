import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
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
      walmart: file(relativePath: { eq: "partners/Walmart.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="my-12">
      <h2 className="text-center">Our Friends</h2>
      <div id="partners-container">
        <a
          href="https://www.sickkidsfoundation.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.sickkids.childImageSharp.fluid} />
        </a>
        <Link to="/pop-star-programs">
          <Img fluid={data.travellingStage.childImageSharp.fluid} />
        </Link>
        <a
          href="https://www.kobaentertainment.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.koba.childImageSharp.fluid} />
        </a>
        <a
          href="https://www.paquinentertainment.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.paquin.childImageSharp.fluid} />
        </a>
        <a
          href="https://www.walmart.ca/en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.walmart.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}
