import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const homeQuery = graphql`
  {
    starLogo: file(relativePath: { eq: "Splashlogo.png" }) {
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
    <>
      <SEO title="Official Site Of The Mini Pop Kids" />
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, var(--main-blue) 20%, var(--main-yellow) 50%, var(--main-pink) 80%)",
          height: "100vh",
          border: "1px solid red",
        }}
        className="flex"
      >
        <div
          className="flex flex-col h-full justify-around mx-auto self-center lg:flex-row lg:h-auto"
          style={{ border: "1px solid blue" }}
        >
          <Link
            to="/tour"
            className="splashButton self-center"
            style={{ backgroundColor: "var(--main-yellow)" }}
          >
            Tour Dates
          </Link>
          <Img
            fluid={data.starLogo.childImageSharp.fluid}
            className="mx-auto starLogo"
          />
          <Link
            to="/home"
            className="splashButton self-center"
            style={{ backgroundColor: "var(--main-blue)" }}
          >
            Enter Site
          </Link>
        </div>
      </div>
    </>
  )
}
