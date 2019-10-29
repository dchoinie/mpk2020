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
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
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
        }}
        className="flex justify-center"
      >
        <div className="flex flex-col lg:flex-row lg:self-center text-center justify-around">
          <Link
            to="/tour"
            className="splashButton self-center"
            style={{ backgroundColor: "var(--main-yellow)" }}
          >
            Tour Dates
          </Link>
          <Img
            fixed={data.starLogo.childImageSharp.fixed}
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

{
  /* <div className="flex flex-col justify-around py-12 lg:flex-row lg:justify-between lg:w-1/2 mx-auto h-full">
          <Link
            to="/tour"
            className="text-2xl splashButton self-center"
            style={{ backgroundColor: "var(--main-yellow)" }}
          >
            Tour Dates
          </Link>
          <Link
            to="/home"
            className="text-2xl splashButton self-center"
            style={{ backgroundColor: "var(--main-blue)" }}
          >
            Enter Site
          </Link>
        </div> */
}
