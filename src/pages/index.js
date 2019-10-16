import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaChevronRight } from "react-icons/fa"

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
    kidsImg: file(relativePath: { eq: "landingPage/kids2020.png" }) {
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
      id="landingPage-container"
    >
      <div className="self-center">
        <div className="max-w-md mx-auto">
          <Img fluid={data.mpkLiveImg.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={data.kidsImg.childImageSharp.fluid} />
        </div>
      </div>
      <div className="flex flex-col md:self-center">
        <h1
          className="text-center text-3xl lg:text-6xl py-6"
          style={{ textShadow: "2px 2px white" }}
        >
          Tickets Available Now!
        </h1>
        <div>
          <div className="flex justify-around">
            <Link to="/tour" className="landingPageBtn text-md lg:text-2xl">
              Tour Dates &amp; Info
            </Link>
            <Link
              to="/home"
              className="landingPageBtn text-md lg:text-2xl flex"
            >
              Enter Site <FaChevronRight className="self-center" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <div
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
      </div> */
}
