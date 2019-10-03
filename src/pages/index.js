import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export const homeQuery = graphql`
  {
    tourImg: file(relativePath: { eq: "landingPage/bright_lights_logo.png" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    kidsImg: file(relativePath: { eq: "landingPage/kids.png" }) {
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
    <div style={{ backgroundColor: "var(--main-pink)", minHeight: "100vh" }}>
      <div
        className="container mx-auto flex"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(var(--main-pink) 30%, var(--main-yellow))",
        }}
      >
        <div className="mx-auto self-center">
          <div
            style={{
              border: "2px solid var(--main-black)",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          >
            <Img fluid={data.tourImg.childImageSharp.fluid} />
          </div>
          <Img fluid={data.kidsImg.childImageSharp.fluid} />
          <h2 className="text-center text-4xl">Tickets Available Now!</h2>
          <div className="flex flex-col text-center lg:flex-row justify-between">
            <Link
              to="/tour"
              className="text-xl landingPageBtn mx-4 my-4 lg:my-0"
            >
              Tour Dates + Info
            </Link>
            <Link
              to="/home"
              className="text-xl landingPageBtn mx-4 my-4 lg:my-0"
            >
              Enter Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
