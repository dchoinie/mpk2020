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
    mpkLiveImg: file(relativePath: { eq: "landingPage/mpk_live_logo.png" }) {
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
    <div
      style={{
        backgroundImage:
          "radial-gradient(var(--main-yellow), var(--main-pink) 80%)",
        minHeight: "100vh",
      }}
    >
      <div
        className="flex container mx-auto"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="mx-auto self-center">
          <div>
            <Img fluid={data.mpkLiveImg.childImageSharp.fluid} />
          </div>
          <Img fluid={data.kidsImg.childImageSharp.fluid} />
          <h2 className="text-center text-4xl">Tickets Available Now!</h2>
          <div className="flex flex-col text-center lg:flex-row justify-around">
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
